import React from "react";
import { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import * as MoviesApi from "../../utils/MoviesApi"
import { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Preloader from "../Preloader/Preloader";

const Movies = ({onMovieLike, saviedMovies, keysWords, setKeysWords}) => {
const [isLoading, setIsLoading] = useState(false);

function filterMovies(movies, value, checkBoxStatus) {
  return  movies.filter((movie) => !checkBoxStatus ?
  (movie.nameRU.toLowerCase().includes(value.toLowerCase()) || movie.nameEN.toLowerCase().includes(value.toLowerCase()))
  :
  (movie.nameEN.toLowerCase().includes(value.toLowerCase()) || movie.nameRU.toLowerCase().includes(value.toLowerCase())) && movie.duration <= 40);
}

const [filteredMovies, setFilteredMovies] = useState([]);
const [value, setValue] = useState('');
const [checkBoxStatus, setCheckBoxStatus] = useState(false);
const [errorSearchMovies, setErrorSearchMovies] = useState(false);

  function handleMoviesSearchSubmit(value) {
    setIsLoading(true);
      setValue(value);
      localStorage.setItem('requestKey', value);
      localStorage.setItem('checkBoxStatus', checkBoxStatus);
      if (localStorage.getItem('baseFilms')) {
          const baseFilmsList = JSON.parse(localStorage.getItem('baseFilms'))
          handleFilterMovies(baseFilmsList, value, checkBoxStatus)
      } else {
          MoviesApi.getMovies()
            .then((baseFilms) => {
                setIsLoading(false);
                handleFilterMovies(baseFilms, value, checkBoxStatus)
                localStorage.setItem('baseFilms', JSON.stringify(baseFilms))
            })
            .catch((err) => {
              console.log(`${err}`);
            })
            .finally(() => {
              setIsLoading(false);
            })
      }
  }

  function handleFilterMovies(movies, value, checkBoxStatus) {
    setIsLoading(false);
    const moviesList = filterMovies(movies, value, checkBoxStatus)
    if (moviesList.length === 0) {
        setErrorSearchMovies(true);
    } else {
        setErrorSearchMovies(false);
    }
    setFilteredMovies(moviesList);
    localStorage.setItem('findedMovies', JSON.stringify(moviesList))
    checkBoxStatus && localStorage.setItem('findedMoviesShort', JSON.stringify(moviesList));
}

useEffect(() => {
  if (localStorage.getItem('requestKey')) {
    setValue(JSON.stringify(localStorage.getItem('requestKey')).replace(/\"/g, ''));
  }
}, []);

  useEffect(() => {
      if (localStorage.getItem('findedMovies')) {
          const movies = JSON.parse(localStorage.getItem('findedMovies'))
          if (JSON.parse(localStorage.getItem('checkBoxStatus'))) {
            setFilteredMovies(filterMovies(movies, value, checkBoxStatus))
          } else {
            setFilteredMovies(movies)
          }
      }
  }, [checkBoxStatus])

  useEffect(() => {
      if (JSON.parse(localStorage.getItem('checkBoxStatus')) && JSON.parse(localStorage.getItem('findedMoviesShort'))) {
        console.log('not found 1')
      } else if (!JSON.parse(localStorage.getItem('checkBoxStatus')) && JSON.parse(localStorage.getItem('findedMovies'))) {
        // console.log('not found 2')
      } else {
        // console.log('not found 3')
      }
  }, [])

  useEffect(() => {
      if (JSON.parse(localStorage.getItem('checkBoxStatus'))) {
        setCheckBoxStatus(true)
          if (localStorage.getItem('findedMoviesShort')) {
              const shortMovies = JSON.parse(localStorage.getItem('findedMoviesShort'))
              setFilteredMovies(shortMovies)
          }
      } else {
        setCheckBoxStatus(false)
      }
  }, [])

  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const width = useWindowSize();
  const getMoreMovies = () => setCount(count + amount);
  const getLimit = () => {
    if (width < 490) {
      setCount(5);
      setAmount(2)
    } else if (width < 1010){
        setCount(8);
        setAmount(2)
      } else if (width < 1280) {
      setCount(9);
      setAmount(3)
    } else {
      setCount(16);
      setAmount(4);
    }
  };

  useEffect(() => {
    getLimit()
  }, [filteredMovies, width]);


  return (
    <main>
      {isLoading ? <Preloader /> :
      <>
      <SearchForm
        handleMoviesSearchSubmit={handleMoviesSearchSubmit}
        value={value}
        setValue={setValue}
        keysWords={keysWords}
        setKeysWords={setKeysWords}
        checkBoxStatus={checkBoxStatus}
        setCheckBoxStatus={setCheckBoxStatus}
        errorSearchMovies={errorSearchMovies}
        />
      <MoviesCardList movieslist={filteredMovies}
        onMovieLike={onMovieLike}
        saviedMovies={saviedMovies}
        keysWords={keysWords}
        count={count}
        getMoreMovies={getMoreMovies}/>
      </>
      }
    </main>
  )
};

export default Movies;

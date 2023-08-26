import React from "react";
import { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import * as MoviesApi from "../../utils/MoviesApi"
import { useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowSize";


const Movies = ({onMovieLike, saviedMovies, keysWords, setKeysWords, checkBoxStatus, setCheckBoxStatus}) => {

  ////////////////////////////////////////////////


const [rawMovies, setRawMovies] = useState(JSON.parse(localStorage.getItem('baseFilms')) || []);
// const [keysWords, setKeysWords] = useState(localStorage.getItem('keysWords') || '');
// const [checkBoxStatus, setCheckBoxStatus] = useState(JSON.parse(localStorage.getItem('checkBoxStatus')));


const [toRenderMovies, setToRenderMovies] = useState([])

useEffect(() => {
  MoviesApi.getMovies()
      .then((data) => {
        localStorage.setItem('baseFilms', JSON.stringify(data));
        setRawMovies(data);
        // filter(rawMovies);
        // setToRenderMovies(filter(rawMovies));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false)
      })
}, [])


const width = useWindowDimensions;
console.log(width);
const [count, setCount] = useState(0);
const [amount, setAmount] = useState(0);
console.log(count);
const getMoreMovies = () => setCount(count + amount);

const getLimit = () => {
  if (width > 480 && width <= 772) {
    setCount(2);
    setAmount(4)
  } else if (width <= 480) {
    setCount(2);
    setAmount(2)
  } else {
    setCount(16);
    setAmount(4)
  }
};

useEffect(getLimit, [width]);







  function handleMoviesSearchSubmit () {
    if (keysWords) {
      // MoviesApi.getMovies()
      // .then((data) => {
      //   localStorage.setItem('baseFilms', JSON.stringify(data));
        // setRawMovies(data);
      //   // filter(rawMovies);
        setToRenderMovies(filter(rawMovies));
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
      // .finally(() => {
      //   // setIsLoading(false)
      // })
    }

  }

function filter() {
  return  rawMovies.filter((movie) => !checkBoxStatus ? movie.nameRU.toLowerCase().includes(keysWords) : movie.nameRU.toLowerCase().includes(keysWords) && movie.duration <= 40);
}
///////////////////////////////////////////////
  return (
    <main>
      <SearchForm handleMoviesSearchSubmit={handleMoviesSearchSubmit} keysWords={keysWords} setKeysWords={setKeysWords} checkBoxStatus={checkBoxStatus} setCheckBoxStatus={setCheckBoxStatus}/>
      {/* <MoviesCardList movieslist={filteredMovies} onMovieLike={onMovieLike} saviedMovies={saviedMovies}/> */}
      <MoviesCardList movieslist={toRenderMovies} onMovieLike={onMovieLike} saviedMovies={saviedMovies} keysWords={keysWords} count={count} getMoreMovies={getMoreMovies}/>
    </main>
  )
};

export default Movies;

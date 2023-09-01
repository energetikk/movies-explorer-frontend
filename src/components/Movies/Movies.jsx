import React from "react";
import { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import * as MoviesApi from "../../utils/MoviesApi";
import { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Preloader from "../Preloader/Preloader";

const Movies = ({ onMovieLike, saviedMovies, keysWords, setKeysWords, submitError, setSubmitError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesAll, setMoviesAll] = useState(JSON.parse(localStorage.getItem("baseFilms")));
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [value, setValue] = useState("");
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [errorSearchMovies, setErrorSearchMovies] = useState(false);

  function handleMoviesSearchSubmit(value) {
    setIsLoading(true);
    setValue(value);
    localStorage.setItem("requestKey", value);
    localStorage.setItem("checkBoxStatus", checkBoxStatus);
    if (localStorage.getItem("baseFilms")) {
      const baseFilmsList = JSON.parse(localStorage.getItem("baseFilms"));
      handleFilterMovies(baseFilmsList, value, checkBoxStatus);
    } else {
      MoviesApi.getMovies()
        .then((baseFilms) => {
          setIsLoading(false);
          localStorage.setItem("baseFilms", JSON.stringify(baseFilms));
          handleFilterMovies(baseFilms, value, checkBoxStatus);
        })
        .catch((err) => {
          console.log(`${err}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function handleFilterMovies(movies, value) {
    setIsLoading(false);
    const moviesList = filterMoviesByKey(movies, value);
    if (moviesList.length === 0) {
      setErrorSearchMovies(true)
    } else {
      setErrorSearchMovies(false);
    }
    setMoviesAll(moviesList);
    setFilteredMovies(checkBoxStatus ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem("findedMovies", JSON.stringify(moviesList));
    localStorage.setItem("findedMoviesShort", JSON.stringify(filterShortMovies(moviesList))
    );
  }

  function filterShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40);
  }

  function filterMoviesByKey(movies, value) {
    const filteredMovies = movies.filter((movie) => {
      return (movie.nameRU.toLowerCase().includes(value.toLowerCase()) || movie.nameEN.toLowerCase().includes(value.toLowerCase()));
    });
    return filteredMovies;
  }

  function toggleMoviesShort() {
    setCheckBoxStatus(!checkBoxStatus);
    if (!checkBoxStatus) {
      setFilteredMovies(filterShortMovies(moviesAll));
    } else {
      setFilteredMovies(moviesAll);
    }
    localStorage.setItem("checkBoxStatus", !checkBoxStatus);
  }

  useEffect(() => {
    if (localStorage.getItem("requestKey")) {
      setValue(
        JSON.stringify(localStorage.getItem("requestKey")).replace(/\"/g, "")
      );
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("findedMovies")) {
      const movies = JSON.parse(localStorage.getItem("findedMovies"));
      if (JSON.parse(localStorage.getItem("checkBoxStatus"))) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("checkBoxStatus"))) {
      setCheckBoxStatus(true);
      if (localStorage.getItem("findedMoviesShort")) {
        const shortMovies = JSON.parse(
          localStorage.getItem("findedMoviesShort")
        );
        setFilteredMovies(shortMovies);
      }
    } else {
      setCheckBoxStatus(false);
    }
  }, []);

  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const width = useWindowSize();
  const getMoreMovies = () => setCount(count + amount);
  const getLimit = () => {
    if (width < 767) {
      setCount(5);
      setAmount(2);
    } else if (width < 1010) {
      setCount(8);
      setAmount(2);
    } else if (width < 1280) {
      setCount(9);
      setAmount(3);
    } else {
      setCount(16);
      setAmount(4);
    }
  };

  useEffect(() => {
    getLimit();
  }, [filteredMovies, width]);

  return (
    <main>
      {isLoading ? (
        <Preloader />
      ) : (
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
            toggleMoviesShort={toggleMoviesShort}
            submitError={submitError}
            setSubmitError={setSubmitError}
          />
          <MoviesCardList
            movieslist={filteredMovies}
            onMovieLike={onMovieLike}
            saviedMovies={saviedMovies}
            keysWords={keysWords}
            count={count}
            getMoreMovies={getMoreMovies}
          />
        </>
      )}
    </main>
  );
};

export default Movies;

import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect } from "react";

const SavedMovies = ({
  isTablet,
  saviedMovies,
  onMovieDelete,
  setKeysWords,
  keysWords,
  checkBoxStatus,
  setCheckBoxStatus,
  keysWordsSaviedSearch,
  setKeysWordsSaviedSearch,
  // handleMoviesSearchSubmit
}) => {

  function filterMovies(movies, value, checkBoxStatus) {
    return  movies.filter((movie) => !checkBoxStatus ?
    (movie.nameRU.toLowerCase().includes(value.toLowerCase()) || movie.nameEN.toLowerCase().includes(value.toLowerCase()))
    :
    (movie.nameEN.toLowerCase().includes(value.toLowerCase()) || movie.nameRU.toLowerCase().includes(value.toLowerCase())) && movie.duration <= 40);
  }



  const [filteredMovies, setFilteredMovies] = useState(saviedMovies);
  const [valueSave, setValueSave] = useState('');
  const [checkBoxStatusSave, setCheckBoxStatusSave] = useState(false); //Значение переключателя на странице сохраненных фильмах

  function handleMoviesSearchSubmit(valueSave) {
    setValueSave(valueSave);
  }

  // function handleShortMovies() {
  //   setCheckBoxStatusSave(!checkBoxStatusSave);
  // }

  useEffect(() => {
    const moviesList = filterMovies(saviedMovies, valueSave, checkBoxStatusSave);
    setFilteredMovies(moviesList);
  }, [saviedMovies, valueSave, checkBoxStatusSave]);





  useEffect(() => {
    if (filteredMovies.length === 0) {
      // setErrorMessage("Ничего не найдено")
    } else {
      // setErrorMessage("")
    }
  }, [filteredMovies]);







  return (
    <main className="saved-movies__container">
      <SearchForm
        keysWords={keysWords}
        setKeysWords={setKeysWords}
        checkBoxStatus={checkBoxStatusSave}
        setCheckBoxStatus={setCheckBoxStatusSave}
        keysWordsSaviedSearch={keysWordsSaviedSearch}
        setKeysWordsSaviedSearch={setKeysWordsSaviedSearch}
        handleMoviesSearchSubmit={handleMoviesSearchSubmit}
        setValue={setValueSave}
      />
      <MoviesCardList
        isTablet={isTablet}
        // saviedMovies={filter(saviedMovies)}
        saviedMovies={filteredMovies}
        onMovieDelete={onMovieDelete}
      />
    </main>
  );
};

export default SavedMovies;

import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect } from "react";

const SavedMovies = ({
  saviedMovies,
  onMovieDelete,
  setKeysWords,
  keysWords,
  checkBoxStatus,
  setCheckBoxStatus,
  keysWordsSaviedSearch,
  setKeysWordsSaviedSearch,
}) => {

  const [filteredMovies, setFilteredMovies] = useState(saviedMovies);
  const [valueSave, setValueSave] = useState('');
  const [checkBoxStatusSave, setCheckBoxStatusSave] = useState(false);

  function filterMovies(movies, value, checkBoxStatus) {
    return  movies.filter((movie) => !checkBoxStatus ?
    (movie.nameRU.toLowerCase().includes(value.toLowerCase()) || movie.nameEN.toLowerCase().includes(value.toLowerCase()))
    :
    (movie.nameEN.toLowerCase().includes(value.toLowerCase()) || movie.nameRU.toLowerCase().includes(value.toLowerCase())) && movie.duration <= 40);
  }

  function handleMoviesSearchSubmit(valueSave) {
    setValueSave(valueSave);
  }

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
        // saviedMovies={filter(saviedMovies)}
        saviedMovies={filteredMovies}
        onMovieDelete={onMovieDelete}
      />
    </main>
  );
};

export default SavedMovies;

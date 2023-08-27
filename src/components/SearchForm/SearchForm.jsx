import React from "react";
import { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

const SearchForm = ({
  handleMoviesSearchSubmit,
  setValue,
  value,
  getFavoriteMovies,
  onSubmitSearch,
  setKeysWords,
  keysWords,
  checkBoxStatus,
  setCheckBoxStatus,
  keysWordsSaviedSearch,
  setKeysWordsSaviedSearch,
}) => {
  const location = useLocation();
  const { pathname } = location;

  function handleSearchInput(evt) {
    // const value = evt.target.value;
    // setKeysWords(value);
    // localStorage.setItem('keysWords', value);
    setValue(evt.target.value);
  }

  function searchMoviesSubmit(evt) {
    evt.preventDefault();
    if (!value) {
      if (location.pathname === "/movies") {
        // setError("Нужно ввести ключевое слово")
        // setErrorMessage('')
        localStorage.setItem("requestKey", "");
        localStorage.setItem("findedMovies", []);
        localStorage.setItem("findedMoviesShort", []);
        return;
      } else {
        getFavoriteMovies();
      }
    } else {
      handleMoviesSearchSubmit(value);
      // pathname === '/movies' && setError('')
    }
  }

  return (
    <section className="search-form__container">
      <form className="search-form" onSubmit={searchMoviesSubmit}>
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          value={value}
          onChange={handleSearchInput}
        />
        <button
          type="submit"
          className={`search-form__submit ${
            !value ? "search-form__submit_disabled" : ""
          }`}
          disabled={!value}
        ></button>
      </form>
      <span className="search-form__line"></span>
      <FilterCheckbox
        className="filter-checkbox"
        checkBoxStatus={checkBoxStatus}
        setCheckBoxStatus={setCheckBoxStatus}
      />
      {/* {requestMoviesEmpty ?
      (<p>Введите запрос...</p>) : ''
    } */}
    </section>
  );
};

export default SearchForm;

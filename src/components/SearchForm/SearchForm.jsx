import React from "react";
import { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";


const SearchForm = ({handleMoviesSearchSubmit, setKeysWords, keysWords, checkBoxStatus, setCheckBoxStatus, keysWordsSaviedSearch, setKeysWordsSaviedSearch }) => {
  // const [requestMoviesEmpty, setRequestMoviesEmpty] = useState(true);


  // const [keysWords, setKeysWords] = useState(localStorage.getItem('keysWords') || '');
  const location = useLocation();
  const {pathname} = location;

  function handleSearchInput(evt) {
    const value = evt.target.value;
    setKeysWords(value);
    // setKeysWordsSaviedSearch(value);
    // setRequestMoviesEmpty(false);
    // if (pathname === '/savied') {
    localStorage.setItem('keysWords', value);
    // } else {
    //   localStorage.setItem('keysWordsSavied', value);
    // }
  }

  function searchMoviesSubmit(evt) {
    evt.preventDefault()
    if (keysWords.length !== 0) {
    handleMoviesSearchSubmit();
    // setRequestMoviesEmpty(false)
   }
  };






  return (
    <section className="search-form__container">
      <form className="search-form" onSubmit={searchMoviesSubmit}>
        <input type="text" className="search-form__input" placeholder="Фильм" value={keysWords} onChange={handleSearchInput}/>
        <button type="submit" className="search-form__submit">
        </button>
      </form>
      <span className="search-form__line"></span>
      <FilterCheckbox className="filter-checkbox" checkBoxStatus={checkBoxStatus} setCheckBoxStatus={setCheckBoxStatus}/>
      {/* {requestMoviesEmpty ?
      (<p>Введите запрос...</p>) : ''
    } */}
    </section>
  )
};

export default SearchForm;

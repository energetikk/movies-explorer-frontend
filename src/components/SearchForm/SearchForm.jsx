import React from "react";
import './SearchForm.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

const SearchForm = (props) => {
  return (
    <>
      <div className="search-form">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button type="submit" className="search-form__submit">
        {/* img src="../../../../images/find_icon.svg" alt="Иконка поиска" /> */}
        </button>
      </div>
      <FilterCheckbox />
    </>
  )
};

export default SearchForm;

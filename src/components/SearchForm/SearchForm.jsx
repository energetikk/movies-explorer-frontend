import React from "react";
import './SearchForm.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

const SearchForm = (props) => {
  return (
    <section className="search-form__container">
      <form className="search-form">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button type="submit" className="search-form__submit">
        {/* img src="../../../../images/find_icon.svg" alt="Иконка поиска" /> */}
        </button>
      </form>
      <span className="search-form__line"></span>
      <FilterCheckbox className="filter-checkbox"/>
    </section>
  )
};

export default SearchForm;

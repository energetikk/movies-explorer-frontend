import React from "react";
import './FilterCheckbox.css';

const FilterCheckbox = (props) => {
  return (
    <div className="filter-checkbox">
      <input type="checkbox" id="myCheckbox" />
      <label for="myCheckbox" class="checkbox-toggle"></label>
      <p className="filter-checkbox-name">Короткометражки</p>
    </div>
  )
};

export default FilterCheckbox;

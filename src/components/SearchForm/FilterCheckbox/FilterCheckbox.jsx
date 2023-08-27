import React from "react";
import { useState } from "react";
import './FilterCheckbox.css';

const FilterCheckbox = ({checkBoxStatus, setCheckBoxStatus}) => {

const handleCheckBoxToggle = (evt) => {
  const value = evt.target.checked;
  setCheckBoxStatus(value);
  localStorage.setItem('checkBoxStatus', value);
}



  return (
    <div className="filter-checkbox">
      <input type="checkbox" id="myCheckbox" checked={checkBoxStatus} onChange={handleCheckBoxToggle}/>
      <label htmlFor="myCheckbox" className="checkbox-toggle"></label>
      <p className="filter-checkbox-name">Короткометражки</p>
    </div>
  )
};

export default FilterCheckbox;

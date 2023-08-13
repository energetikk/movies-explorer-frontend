import React from "react";
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from "../SearchForm/SearchForm";


const SavedMovies = ({initialMovies, isTablet}) => {
  return (
    <div className="saved-movies__container">
      <SearchForm />
      <MoviesCardList initialMovies={initialMovies} isTablet={isTablet}/>
    </div>
  )
};

export default SavedMovies;

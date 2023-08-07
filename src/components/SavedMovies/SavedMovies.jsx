import React from "react";
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from "../SearchForm/SearchForm";


const SavedMovies = ({initialMovies}) => {
  return (
    <div className="saved-movies__container">
      <SearchForm />
      <MoviesCardList initialMovies={initialMovies}/>
    </div>
  )
};

export default SavedMovies;

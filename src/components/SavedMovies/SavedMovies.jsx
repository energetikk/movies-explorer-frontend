import React from "react";
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from "../SearchForm/SearchForm";


const SavedMovies = ({initialMovies, isTablet}) => {
  return (
    <main className="saved-movies__container">
      <SearchForm />
      <MoviesCardList initialMovies={initialMovies} isTablet={isTablet}/>
    </main>
  )
};

export default SavedMovies;

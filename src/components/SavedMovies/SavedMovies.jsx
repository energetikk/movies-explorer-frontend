import React from "react";
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from "../SearchForm/SearchForm";


const SavedMovies = ({initialMovies, isTablet, saviedMovies, onMovieDelete}) => {
  return (
    <main className="saved-movies__container">
      <SearchForm />
      <MoviesCardList initialMovies={initialMovies} isTablet={isTablet} saviedMovies={saviedMovies} onMovieDelete={onMovieDelete}/>
    </main>
  )
};

export default SavedMovies;

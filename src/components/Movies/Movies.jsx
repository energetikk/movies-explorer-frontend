import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';

const Movies = ({initialMovies}) => {
  return (
    <div>
      <SearchForm />
      <MoviesCardList initialMovies={initialMovies}/>
    </div>
  )
};

export default Movies;

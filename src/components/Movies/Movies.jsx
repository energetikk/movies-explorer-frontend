import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';

const Movies = ({initialMovies}) => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList initialMovies={initialMovies}/>
    </main>
  )
};

export default Movies;

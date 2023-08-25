import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';

const Movies = ({initialMovies, onMovieLike, saviedMovies, onMovieDelete}) => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList initialMovies={initialMovies} onMovieLike={onMovieLike} saviedMovies={saviedMovies}/>
    </main>
  )
};

export default Movies;

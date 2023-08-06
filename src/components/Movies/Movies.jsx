import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css';

const Movies = ({initialMovies}) => {
  // console.log(movies);
  return (
    <div>
      <MoviesCardList initialMovies={initialMovies}/>
    </div>
  )
};

export default Movies;

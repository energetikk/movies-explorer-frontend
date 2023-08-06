import React from "react";
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


const SavedMovies = ({initialMovies}) => {
  return (
    <div>
      <MoviesCardList initialMovies={initialMovies}/>
    </div>
  )
};

export default SavedMovies;

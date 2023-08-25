import React from "react";
import {useState, useEffect} from 'react';
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import * as MoviesApi from "../../utils/MoviesApi"
// import { useLocation } from "react-router-dom";

const MoviesCardList = ({ initialMovies, onMovieLike, saviedMovies, onMovieDelete, isTablet, isMobile }) => {
  // const arrSizeWindowTablet =  isTablet ? initialMovies : initialMovies.slice(0,2);
  // const location = useLocation();
  // const { pathname } = location;
  // const arrSizeWindowMobile =  (isMobile && pathname === '/movies') ? initialMovies : initialMovies.slice(0,8);


  const [movieslist, setMoviesList] = useState([]);

  useEffect(() => {
    getMovies();
  }, [])

  function getMovies() {
    MoviesApi.getMovies().then((data) => {
      setMoviesList(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }







  return (
    <>
      <section className="movies-cards-list">
        <ul className="movies__preview-list">
          {movieslist.map((card) => (
            <MoviesCard
              key={card.id}
              card={card}
              initialMovies={movieslist}
              onMovieLike={onMovieLike}
              saviedMovies={saviedMovies}
              onMovieDelete={onMovieDelete}
            />
          ))}
        </ul>
        {initialMovies.length > 4 && (
          <button type="button" className="movies__more-button">
            Ещё
          </button>
        )}
      </section>
    </>
  );
};

export default MoviesCardList;

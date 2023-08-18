import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
// import { useLocation } from "react-router-dom";

const MoviesCardList = ({ initialMovies, isTablet, isMobile }) => {
  // const arrSizeWindowTablet =  isTablet ? initialMovies : initialMovies.slice(0,2);
  // const location = useLocation();
  // const { pathname } = location;
  // const arrSizeWindowMobile =  (isMobile && pathname === '/movies') ? initialMovies : initialMovies.slice(0,8);

  return (
    <>
      <section className="movies-cards-list">
        <ul className="movies__preview-list">
          {initialMovies.map((card) => (
            <MoviesCard
              key={card.index}
              card={card}
              initialMovies={initialMovies}
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

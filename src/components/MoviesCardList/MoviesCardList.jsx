import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ initialMovies }) => {
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

import React from "react";
import "./MoviesCardList.css";
// import { initialCards } from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ initialMovies }) => {
  return (
    <>
      <section className="places">
        <ul className="places__photo-cards">
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

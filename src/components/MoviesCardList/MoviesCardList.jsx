import React from "react";
import './MoviesCardList.css';
import { initialCards } from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = (props) => {
  return (
    <>
    <section className="places">
        <ul className="places__photo-cards">
          {initialCards.map((card) => (
            <MoviesCard
              key={card.index}
              card={card}

              // onCardClick={onCardClick}
              // onCardLike={onCardLike}
              // onConfirmDelete={onConfirmDelete}
            />
          ))}
        </ul>
      <button type="button" className="movies__more-button">Ещё</button>
      </section>
    </>
  )
};

export default MoviesCardList;

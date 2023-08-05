import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({card}) => {
  console.log(card);
  return (
    <li className="movie">
      <figure className="movies__element">
        <img className="movies-card" src={card.link} alt={`Картинка превью фильма: ${card.name}`} />
        <figcaption className="movies__card">
          <p className="movies__card-name">{card.name}</p>
          <div className="movies__like">
            <button type="button" className="movies__button-like"></button>
          </div>
        </figcaption>
            <p className="movie__duration">1ч42м</p>
      </figure>
    </li>
  );
};

export default MoviesCard;

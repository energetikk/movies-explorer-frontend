import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({card, initialMovies}) => {

  const moviesFavorite = card.favorite ? 'movies__button-like_active' : 'movies__button-like';

  console.log(card);
  return (
    <li className="movie">
      <figure className="movies__element">
        <img className="movies-card" src={card.link} alt={`Картинка превью фильма: ${card.name}`} />
        <figcaption className="movies__card">
          <p className="movies__card-name">{card.name}</p>
          { initialMovies.length > 4 ?
          (<button type="button" className={moviesFavorite}></button>) :
          (<button type="button" className="movies__button-delete"></button>)
          }
        </figcaption>
        <p className="movie__duration">1ч42м</p>
      </figure>
    </li>
  );
};

export default MoviesCard;

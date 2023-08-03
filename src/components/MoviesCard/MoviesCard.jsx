import React from "react";
import './MoviesCard.css';

const MoviesCard = (props) => {
  return (
    <li>
      <figure className="places__element">
        <img
          className="movies-card"
          src={card.link}
          alt={card.name}
          // onClick={handleClick}
        />
        <figcaption className="places__card">
          <p className="places__card-name">{card.name}</p>
          <div className="places__like">
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
            <p className="places__like-counter">{card.likes.length}</p>
          </div>
        </figcaption>
        {/* <button type="button" className="places__card-delete"></button> */}
{/* // Далее в разметке используем переменную для условного рендеринга */}
        {/* {isOwn && <button className='places__card-delete' type="button" onClick={handleDeleteClick} />} */}
      </figure>
    </li>
  )
};

export default MoviesCard;

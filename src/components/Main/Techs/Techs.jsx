import React from "react";
import './Techs.css';

const Techs = () => {
  return (
    <article className="techs_container">
      <h2 className="techs">Технологии</h2>
      <h2 className="techs__title">7 технологий</h2>
      <h2 className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h2>
        <ul className="techs__items">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.JS</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      {/* </div> */}

    </article>
  )
};

export default Techs;

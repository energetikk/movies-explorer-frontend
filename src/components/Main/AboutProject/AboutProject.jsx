import React from "react";
import './AboutProject.css';

const AboutProject = () => {
  return (
    <div className="about-project">
      <h1 className="about-project__title">О проекте</h1>

      <article className="about-project__subtitle">
        <h2 className="about-project__item">Дипломный проект включал 5 этапов</h2>
        <h2 className="about-project__item">На выполнение диплома ушло 5 недель</h2>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </article>

      <article className="about-project__schema">
        <h2 className="about-project__schema-time-line about-project__schema_backend">1 неделя</h2>
        <h2 className="about-project__schema-time-line about-project__schema_frontend">4 недели</h2>
        <p className="about-project__schema-name">Back-end</p>
        <p className="about-project__schema-name">Front-end</p>
      </article>

    </div>
  )
};

export default AboutProject;

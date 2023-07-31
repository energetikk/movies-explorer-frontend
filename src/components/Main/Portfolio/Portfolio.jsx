import React from "react";
import './Portfolio.css';
import link from '../../../images/link_pic.svg';

const Portfolio = (props) => {
  return (
   <section className="portfolio">
     <h3 className="portfolio__tiitle">Портфолио</h3>
     <ul className="portfolio__list">
      <li className="portfolio__list-item">
        <p className="portfolio__item-name">Статичный сайт</p>
        <a href="https://energetikk.github.io/how-to-learn/" target='_blank' className="portfolio__link"><img src={link} alt="символ стрелки" className="portfolio__link-pic"/></a>
      </li>
      <li className="portfolio__list-item">
        <p className="portfolio__item-name">Адаптивный сайт</p>
        <a href="https://energetikk.github.io/russian-travel/" target='_blank' className="portfolio__link"><img src={link} alt="символ стрелки" className="portfolio__link-pic"/></a>
      </li>
      <li className="portfolio__list-item">
        <p className="portfolio__item-name">Одностраничное приложение</p>
        <a href="https://energetikk.github.io/mesto/" target='_blank' className="portfolio__link"><img src={link} alt="символ стрелки" className="portfolio__link-pic"/></a>
      </li>
     </ul>
   </section>
  )
};

export default Portfolio;

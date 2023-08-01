import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__contacts">
        <p className="footer__copyright">&copy;&nbsp;2023</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" className="footer__link">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/energetikk/" className="footer__link">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

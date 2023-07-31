import React from "react";
import './NavTab.css';
// import { Link } from 'react-router-dom'

const NavTab = (props) => {
  return (
    <div>
      <nav className="navtab">
        <a href="/" className="navtab__link">О проекте</a>
        <a href="/"className="navtab__link">Технологии</a>
        <a href="/" className="navtab__link">Студент</a>
      </nav>
    </div>
  )
};

export default NavTab;

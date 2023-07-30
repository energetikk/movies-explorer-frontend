import React from "react";
import './NavTab.css';
import { Link } from 'react-router-dom'

const NavTab = (props) => {
  return (
    <div>
      <nav className="navtab">
        <Link className="navtab__link">О проекте</Link>
        <Link className="navtab__link">Технологии</Link>
        <Link className="navtab__link">Студент</Link>
      </nav>
    </div>
  )
};

export default NavTab;

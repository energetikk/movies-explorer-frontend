import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {
  return (
    <main className="menu">
      <section className="menu__container">
        <button className="menu__button-close" type="button"></button>
        <nav className="menu__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `menu__link ${isActive ? "menu__link_active" : ""}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `menu__link ${
                isActive ? "menu__link_active" : ""
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `menu__link ${
                isActive ? "menu__link_active" : ""
              }`
            }
          >
            Сохраненые фильмы
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `menu__account ${
                isActive ? "menu__account_active" : ""
              }`
            }
          >
            <p className="menu__button-account">Аккаунт</p>
            <div className="menu__account-icon"></div>
          </NavLink>
        </nav>
      </section>
    </main>
  );
};

export default Menu;

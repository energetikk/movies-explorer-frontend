import React from "react";
import logo from "../../images/logo_header.png";
// import {useLocation} from "react-router-dom"
import { Link, NavLink } from "react-router-dom";




function Header({ loggedIn }) {


  const backgroundHeader = loggedIn ? 'header__background_dark' : '';
  // const location = useLocation();
  const isActive = true;
  return (
    <div className="auth-container">
      <header className={`header ${backgroundHeader}`}>
        <Link to="/">
          <img
            src={logo}
            alt="Логотип соцсети Mesto"
            className="header__logo"
          />
        </Link>
        {loggedIn ? (
          <nav className="header__movies">
            <NavLink to="/movies" className={({isActive}) => `header__films ${isActive ? "header__films_active" : ""}`}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({isActive}) => `header__savied-films ${isActive ? "header__savied-films_active" : ""}`}>Сохраненые фильмы</NavLink>
            <NavLink to="/profile" className={({isActive}) => `header__account ${isActive ? "header__account_active" : ""}`}>
              <p className="header__button-account">Аккаунт</p>
              <div className="header__account-icon"></div>
            </NavLink>
          </nav>
        ) : (
          <div className="auth">
            <Link className="header__button-signup" to="/sign-up">
              Регистрация
            </Link>
            <Link className="header__button-signin" to="/sign-in">
              Войти
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

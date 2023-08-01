import React from "react";
import logo from "../../images/logo_header.png";
// import {useLocation} from "react-router-dom"
import { Link } from "react-router-dom";

function Header({loggedIn, emailUser, singOut}) {
  // const location = useLocation();
  return (
    <div className="auth-container">
      <header className="header">
      <img src={logo} alt="Логотип соцсети Mesto" className="header__logo" />
        {true ? (
          <div className="header__movies">
            <Link className="header__films">Фильмы</Link>
            <Link className="header__save-films">Сохраненые фильмы</Link>
            <Link onClick={singOut} to="/sign-in" className="header__singout" >Аккаунт</Link>
          </div> ) : (
            <div className="auth">
                <Link className="header__button-signup" to="/sign-up">Регистрация</Link>
                <Link className="header__button-signin" to="/sign-in">Войти</Link>
            </div>
          )}
    </header>
    </div>
  );
}

export default Header;


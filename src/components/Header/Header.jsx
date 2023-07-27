import React from "react";
import logo from "../../images/logo_header.png";
// import {useLocation} from "react-router-dom"
import { Link } from "react-router-dom";

function Header({loggedIn, emailUser, singOut}) {
  // const location = useLocation();
  return (
    <>
      <header className="auth">
      <img src={logo} alt="Логотип соцсети Mesto" className="header__logo" />
        {true ? (
          <div className="qwe">
            <Link className="header__email">Фильмы</Link>
            <Link className="header__email">Сохраненые фильмы</Link>
            {/* <p className="header__email">{emailUser}</p> */}
            <Link onClick={singOut} to="/sign-in" className="header__singout" >Аккаунт</Link>
            {/* <Link onClick={singOut} to="/sign-in" className="header__singout" >Выйти22222</Link>  */}
          </div> ) : (
            <>
              {/* {location.pathname === "/sign-up" ?  */}
                <Link className="auth_button" to="/sign-up">Регистрация</Link>
                <Link className="auth_button" to="/sign-in">Войти</Link>
                {/* } */}
            </>
          )}
    </header>
    <div className="header__line"></div>
    </>
  );
}

export default Header;


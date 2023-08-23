import React from "react";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import SavedMovies from "../SavedMovies/SavedMovies";
import { initialCards, moviesFavorite } from "../../utils/constants";
import Movies from "../Movies/Movies";
import { useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
// import * as Auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// import * as Auth from "../../utils/auth";
// import api from "../../utils/api";
import * as MainApi from "../../utils/MainApi";

function App() {
  //Для переключения отображения верстки Heder необходимо вручную поменять стейт переменной статуса loggedIn
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialMovies, setInitialMovies] = useState(initialCards);
  const [currentUser, setCurrentUser] = useState({});
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 550);
  const [isTablet, setIsTablet] = React.useState(window.innerWidth <= 768);
  const [isStatusLoginError, setIsStatusLoginError] = useState(false);
  const [emailUser, setEmailUser] = useState("");
  const [nameUser, setNameUser] = useState(currentUser.name);

  const navigate = useNavigate();

  // Регистрация пользователя........................................................................


  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo().then((res) =>
        setCurrentUser({
          email: res.email,
          name: res.name,
        }),
      );
    }
  }, [loggedIn]);


  function handleCheckRegister(name, email, password) {
    MainApi.register({ name, email, password })
      .then((res) => {
        // setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        handleCheckStatusLoginError(err);
        console.log(`ошибка ${err}`);
      });
  }

  function handleCheckStatusLoginError() {
    setIsStatusLoginError(true);
  }


function handleCheckLogin(password, email) {
  MainApi.authorize({password, email})
    .then((res) => {
      localStorage.setItem('jwt', res.token);
      setLoggedIn(true);
      // localStorage.setItem('isLoggedIn', true);
      navigate("/movies", { replace: true });
    })
    .catch((err) => {
      handleCheckStatusLoginError();
      console.log(`ошибка ${err}`);
    });
}


function handleUpdateUser(value) {
  MainApi.setUserInfo(value)
  .then((res) => {
    setCurrentUser(res);
  })
  .catch((err) => {
    console.log(err);
  });
}

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi.getContent(jwt)
        .then(() => {
          setLoggedIn(true);
          handleLogin();
          // navigate(pathname);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLogin = (user) => {
    setLoggedIn(true);
    setEmailUser(user.email);
    setNameUser(user.name);
  };


  useEffect(() => {
    tokenCheck();
  }, [currentUser]);









/*
  // Логин пользователя........................................................................

  function handleCheckLogin(password, email) {
    Auth.authorize({ password, email })
      .then((res) => {
        console.log(res.token);
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          handleLogin(email);
          navigate("/", { replace: true });
          // navigate(location.pathname, { replace: true });
        }
      })
      .catch((err) => {
        handleCheckStatusLoginError();
        console.log(`ошибка ${err}`);
      });
  }

  const handleLogin = (user) => {
    setLoggedIn(true);
    setEmailUser(user.email);
    setNameUser(user.name);
  };



  // Проверка токена........................................................................

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    // if (jwt) {
      // Auth.getContent()
      Auth.getContent(jwt)
        .then((user) => {
          // setLoggedIn(true);
          handleLogin(user);
          navigate("/", { replace: true });
        })
        .catch((err) => console.log(err));
    // }
  };

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);


 // Получение данных пользователя........................................................................

 const getUserDataApi = () => {
  MainApi
  .getUserInfo()
  .then((data) => setCurrentUser(data))
  .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
};

useEffect(() => {
  if (loggedIn) {
  getUserDataApi();
}
}, [loggedIn]);





  // Обновление данных пользователя........................................................................

  function handleUpdateUser(value) {
    // console.log(value);
    MainApi.setUserInfo(value)
    .then((res) => {
      // console.log(res);
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

*/

    // Выход пользователя........................................................................

    function signOut() {
      localStorage.removeItem("jwt");
      setLoggedIn(false);
      navigate("/signin");
    }

    console.log(currentUser);

  // Доступ к свойствам объекта location
  const location = useLocation();
  const { pathname } = location;
  const [ErrorPage, setErrorPage] = useState(false);
  // const handleOpenMenu = handleToggleMenu;
  const [closeMenu, setCloseMenu] = useState(false);

  const handleToggleMenu = () => {
    setCloseMenu(!closeMenu);
  };

  const handleSizeWindow = () => {
    setIsMobile(window.innerWidth <= 550);
    setIsTablet(window.innerWidth <= 768);
  };

  React.useEffect(() => {
    const resizeWindow = window.addEventListener("resize", handleSizeWindow);
    return resizeWindow;
  }, []);









  return (
    <div className="app__center">
      <CurrentUserContext.Provider value={currentUser}>
        {pathname !== "/signin" && pathname !== "/signup" && !ErrorPage && (
          <Header loggedIn={loggedIn} handleToggleMenu={handleToggleMenu} />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                initialMovies={initialMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                initialMovies={moviesFavorite}
                isTablet={isTablet}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                singOut={signOut}
                nameUser={nameUser}
                emailUser={emailUser}
                onUpdateUser={handleUpdateUser}
              />
            }
          />

          <Route
            path="/signin"
            element={<Login handleCheckLogin={handleCheckLogin} />}
          />
          <Route
            path="/signup"
            element={<Register handleCheckRegister={handleCheckRegister} />}
          />

          <Route
            path="*"
            element={<PageNotFound setErrorPage={setErrorPage} />}
          />
        </Routes>
        {(pathname === "/" ||
          pathname === "/movies" ||
          pathname === "/saved-movies") && <Footer />}
        <Menu handler={closeMenu} handleToggleMenu={handleToggleMenu} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

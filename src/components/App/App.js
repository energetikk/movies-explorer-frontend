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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
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
  const [emailUser, setEmailUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const navigate = useNavigate();

  function handleCheckStatusLoginError() {
    setIsStatusLoginError(true);
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi.getContent(jwt)
      .then(
        (user) => {
          handleLogin(user);
          navigate('/', {replace: true})
        }
      )
      .catch(err => console.log(err))
    }
  }

  const handleLogin = (user) => {
    setLoggedIn(true);
    setEmailUser(user.email);
    setNameUser(user.name);
  }

  function handleCheckRegister(name, password, email) {
    MainApi.register({name, password, email})
          .then((res) => {
              console.log(res);
              setLoggedIn(true);
              navigate('/', { replace: true })
          })
          .catch((err) => {
              handleCheckStatusLoginError(err);
              console.log(`ошибка ${err}`);
              }
          )
  }

  function handleCheckLogin(password, email) {
    MainApi.authorize({ password, email })
          .then((res) => {
            console.log(res.token);
              if (res.token) {
                  localStorage.setItem('jwt', res.token);
                  handleLogin(email);
                  navigate('/', { replace: true });
              }
          })
          .catch((err) => {
                      handleCheckStatusLoginError();
                      console.log(`ошибка ${err}`)
                  }
              )
  }

  function singOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/signin');
  }

  useEffect(() => {
    tokenCheck();
  }, [loggedIn])


  // Доступ к свойствам объекта location
  const location = useLocation();
  const { pathname } = location;
  const [ErrorPage, setErrorPage] = useState(false)
  // const handleOpenMenu = handleToggleMenu;
  const [closeMenu, setCloseMenu] = useState(false);

  const handleToggleMenu = () => {
    setCloseMenu(!closeMenu);
  }

  const handleSizeWindow = () => {
    setIsMobile(window.innerWidth <= 550);
    setIsTablet(window.innerWidth <= 768);
  };

  useEffect(() => {
    const resizeWindow = window.addEventListener('resize', handleSizeWindow);
    return resizeWindow;
  }, []);


  useEffect(() => {
    if (loggedIn) {
      MainApi
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleUpdateUser(value) {
    console.log(value);
    MainApi.setUserInfo(value).then((res) => {
      console.log(res);
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }



  return (
    <div className="app__center">

      <CurrentUserContext.Provider value={currentUser}>
        {(pathname !== '/signin' && pathname !== '/signup' && !ErrorPage) && <Header loggedIn={loggedIn} handleToggleMenu={handleToggleMenu}/>}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route  path="/movies" element={<ProtectedRoute element={Movies} loggedIn={loggedIn}
            initialMovies={initialMovies} />} />
          <Route  path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn}
            initialMovies={moviesFavorite} isTablet={isTablet} />} />
          <Route path="/profile" element={ <ProtectedRoute element={Profile} loggedIn={loggedIn} singOut={singOut} nameUser={nameUser} emailUser={emailUser} onUpdateUser={handleUpdateUser} />} />

          <Route path="/signin" element={<Login handleCheckLogin={handleCheckLogin} />} />
          <Route path="/signup" element={<Register handleCheckRegister={handleCheckRegister} />} />

          <Route path="*" element={<PageNotFound setErrorPage={setErrorPage} />} />
        </Routes>
        {(pathname === '/' || pathname === '/movies' || pathname === '/saved-movies') && <Footer />}
        <Menu handler={closeMenu} handleToggleMenu={handleToggleMenu}/>
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;

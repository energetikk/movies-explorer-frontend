import React from "react";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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


function App() {
  //Для переключения отображения верстки Heder необходимо вручную поменять стейт переменной статуса loggedIn
  const [loggedIn, setLoggedIn] = useState(true);
  const [initialMovies, setInitialMovies] = useState(initialCards);
  const [currentUser, setCurrentUser] = useState({});
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 550);
  const [isTablet, setIsTablet] = React.useState(window.innerWidth <= 768);

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

  React.useEffect(() => {
    const resizeWindow = window.addEventListener('resize', handleSizeWindow);
    return resizeWindow;
  }, []);


  return (
    <div className="app__center">

      <CurrentUserContext.Provider value={currentUser}>
        {/* {(pathname !== '/signin' || pathname !== '/signup' || pathname !== '*') && <Header loggedIn={loggedIn} />} */}
        {/* { pathname !== '/signin' && <Header loggedIn={loggedIn} />} */}
        {/* {(pathname !== '/signin' && pathname !== '/signup' && pathname !== '*') && <Header loggedIn={loggedIn} />} */}
        {(pathname !== '/signin' && pathname !== '/signup' && !ErrorPage) && <Header loggedIn={loggedIn} handleToggleMenu={handleToggleMenu}/>}
        {/* { pathname !== '/signin' && <Header loggedIn={loggedIn} />} */}
        {/* <Header loggedIn={loggedIn} /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/movies" element={<SearchForm />} /> */}
          <Route
            path="/movies"
            element={<Movies initialMovies={initialMovies} />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies initialMovies={moviesFavorite} isTablet={isTablet}/>}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound setErrorPage={setErrorPage} />} />
        </Routes>
        {(pathname === '/' || pathname === '/movies' || pathname === '/saved-movies') && <Footer />}
        <Menu handler={closeMenu} handleToggleMenu={handleToggleMenu}/>
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;

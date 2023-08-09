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


function App() {
  //Для переключения отображения верстки Heder необходимо вручную поменять стейт переменной статуса loggedIn
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialMovies, setInitialMovies] = useState(initialCards);
  const [currentUser, setCurrentUser] = useState({});

  // Доступ к свойствам объекта location
  const location = useLocation();
  const { pathname } = location;
  const [ErrorPage, setErrorPage] = useState(false)

  return (
    <div className="app__center">

      <CurrentUserContext.Provider value={currentUser}>
        {/* {(pathname !== '/sign-in' || pathname !== '/sign-up' || pathname !== '*') && <Header loggedIn={loggedIn} />} */}
        {/* { pathname !== '/sign-in' && <Header loggedIn={loggedIn} />} */}
        {/* {(pathname !== '/sign-in' && pathname !== '/sign-up' && pathname !== '*') && <Header loggedIn={loggedIn} />} */}
        {(pathname !== '/sign-in' && pathname !== '/sign-up' && !ErrorPage) && <Header loggedIn={loggedIn} />}
        {/* { pathname !== '/sign-in' && <Header loggedIn={loggedIn} />} */}
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
            element={<SavedMovies initialMovies={moviesFavorite} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="*" element={<PageNotFound setErrorPage={setErrorPage} />} />
        </Routes>
        {(pathname === '/' || pathname === '/movies' || pathname === '/saved-movies') && <Footer />}

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;

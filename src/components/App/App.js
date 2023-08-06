import React from "react";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import PageNotFound from "../PageNotFound/PageNotFound";
import './App.css';
// import Main from "./Main";
// import Footer from "./Footer";
// import ImagePopup from "./ImagePopup";
// import api from "../utils/api";
// import EditProfilePopup from "./EditProfilePopup";
// import EditAvatarPopup from "./EditAvatarPopup";
// import AddPlacePopup from "./AddPlacePopup";
// import ConfirmDeletePopup from "./ConfirmDeletePopup";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
// import MoviesCard from "../../components/MoviesCard/MoviesCard";
import SavedMovies from "../SavedMovies/SavedMovies";
import { initialCards, moviesFavorite } from "../../utils/constants";
import Movies from "../Movies/Movies";
// import ProtectedRoute from './ProtectedRoute'
// import PageNotFound from "./PageNotFound";
// import * as Auth from '../utils/Auth';
// import { useNavigate } from "react-router-dom";
// import InfoTooltip from './InfoTooltip'
// import logoSuccess from '../images/success.png'
// import logoError from '../images/nosuccess.png'
// import { initialCards } from "../../utils/constants";


function App() {
  //Для переключения отображения верстки Heder необходимо вручную поменять стейт переменной статуса loggedIn
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialMovies, setInitialMovies] = useState(initialCards);
  console.log(initialMovies);
  return (
    <div className="app__center">
      <Header loggedIn={loggedIn}/>
      {/* <Profile /> */}
      <Main />
      <PageNotFound />
      <Login />
      <Register />
      <SearchForm />
      <Movies initialMovies={initialMovies}/>
      <SavedMovies initialMovies={moviesFavorite}/>
      <Footer />
    {/* <CurrentUserContext.Provider value={currentUser}>
      {/* <Header loggedIn={loggedIn} emailUser={emailUser} singOut={singOut}/>
      <Routes>
        <Route path="/sign-up" element={<Register handleCheckRegister={handleCheckRegister}/>} />
        <Route path="/sign-in" element={<Login handleCheckLogin={handleCheckLogin}/>} />
        <Route  path="/" element={<ProtectedRoute element={Main} loggedIn={loggedIn}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onConfirmDelete={handleConfirmPopupOpen}
        cards={cards}/>} />
        <Route path="/" element={loggedIn ? <Navigate to ="/" /> : <Navigate to="/sign-in" replace/>}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>

        {loggedIn && <Footer />}

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onUpdateCards={handleAddPlaceSubmit}
        />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onSubmitConfirmDelete={handleCardDelete}
        />
        <InfoTooltip name={'message'} logo={logoError} textMessage={"Что-то пошло не так! Попробуйте еще раз."} isOpen={isStatusLoginError} onClose={closeAllPopups} />
        <InfoTooltip name={'message'}  logo={logoSuccess} textMessage={"Вы успешно зарегистрировались!"} isOpen={isStatusLoginOk} onClose={closeAllPopups} />

      </CurrentUserContext.Provider> */}
    </div>
  );
}

export default App;

import React from "react"
import { useState } from "react";
import "./profile.css";


const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  //Для отображения страницы с непройденной валидацией необходимо ниже вручную поменять стейт переменной validationProfile
  const [validationProfile, setValidationProfile] = useState(false);

  function saveProfile() {
    setEditMode(true);
  }

  function editProfile() {
    setEditMode(false);
  }

  return (
    <div className="profile__container">
      <h2 className="profile__title">Привет, Павел!</h2>
{ editMode ?
      (<>
      <div className="profile__info">
        <p className="profile__parameter">Имя</p>
        <p className="profile__value">Павел</p>
      </div>
      <div className="profile__info">
        <p className="profile__parameter">E-mail</p>
        <p className="profile__value">email@yandex.ru</p>
      </div>
      <button type="button" className="button__edit" onClick={editProfile}>Редактировать</button>
      <button type="button" className="button__logout">Выйти из аккаунта</button></>) :
      (<>
        <div className="profile__info">
          <p className="profile__parameter">Имя</p>
          <p className="profile__value">Дима</p>
        </div>
        <div className="profile__info">
          <p className="profile__parameter">E-mail</p>
          <p className="profile__value">email@yandex.ru</p>
        </div>
      {validationProfile ? (
        <div className="profile__save">
          <span className="profile__error">При обновлении профиля произошла ошибка.</span>
          <button type="button" className="button__save-profile button__save-profile_error">Сохранить</button>
        </div>) :
    (<button type="button" className="button__save-profile" onClick={saveProfile}>Сохранить</button>)}
      </>)}

    </div>
  )
};

export default Profile;

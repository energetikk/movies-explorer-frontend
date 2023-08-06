import React from "react"
import { useState } from "react";
import "./profile.css";


const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [validationProfile, setValidationProfile] = useState(true);
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
      <button type="button" className="button__edit">Редактировать</button>
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
        <>
          <span className="profile__error">При обновлении профиля произошла ошибка.</span>
          <button type="button" className="button__save-profile button__save-profile_error">Сохранить</button>
        </>) :
    (<button type="button" className="button__save-profile">Сохранить</button>)}
      </>)}

    </div>
  )
};

export default Profile;

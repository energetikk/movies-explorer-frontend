import React from "react"
import { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  //Для отображения страницы с непройденной валидацией необходимо ниже вручную поменять стейт переменной validationProfile
  const [validationProfile, setValidationProfile] = useState(false);
  const navigate = useNavigate();

  function saveProfile() {
    setEditMode(true);
  }

  function logOut() {
    navigate('/signin');
  }

  function editProfile() {
    setEditMode(false);
  }

  return (
    <section className="profile__container">
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
      <button type="button" className="button__logout" onClick={logOut}>Выйти из аккаунта</button></>) :
      (<>
        {/* <form className="profile__info">
          <label className="profile__parameter">Имя</label>
          <input className="profile__value" value="Текстовое содержимое">Дима</input>
        </form> */}
        <form className="profile__info-edit">
          <label className="profile__parameter">Имя</label>
          <input type="text" className="profile__value-edit" defaultValue="Дима" />
        </form>
        <form className="profile__info-edit">
          <label className="profile__parameter">E-mail</label>
          <input className="profile__value-edit" defaultValue="email@yandex.ru" />
        </form>
      {validationProfile ? (
        <div className="profile__save">
          <span className="profile__error">При обновлении профиля произошла ошибка.</span>
          <button type="button" className="button__save-profile button__save-profile_error">Сохранить</button>
        </div>) :
    (<button type="button" className="button__save-profile" onClick={saveProfile}>Сохранить</button>)}
      </>)}

    </section>
  )
};

export default Profile;

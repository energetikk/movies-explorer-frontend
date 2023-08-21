import React from "react"
import { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";


const Profile = ({ singOut, nameUser, emailUser, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState({nameUser});
  const [email, setEmail] = useState({emailUser});
  //Для отображения страницы с непройденной валидацией необходимо ниже вручную поменять стейт переменной validationProfile
  const [validationProfile, setValidationProfile] = useState(false);
  const navigate = useNavigate();

  function saveProfile(evt) {
    setEditMode(false);
    console.log(evt.target.value);
  }

  function editProfile() {
    setEditMode(true);
  }

  function handleChangeName(evt) {
    console.log(evt.target.value);
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    console.log(evt.target.value);
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({ name, email });
  }






  return (
    <section className="profile__container">
      <h2 className="profile__title">Привет, Павел!</h2>
{ !editMode ?
      (<>
      <div className="profile__info">
        <p className="profile__parameter">Имя</p>
        <p className="profile__value">{nameUser}</p>
      </div>
      <div className="profile__info">
        <p className="profile__parameter">E-mail</p>
        <p className="profile__value">{emailUser}</p>
      </div>
      <button type="button" className="button__edit" onClick={editProfile}>Редактировать</button>
      <button type="button" className="button__logout" onClick={singOut}>Выйти из аккаунта</button></>) :
      (<>
        <form className="profile__info-edit">
          <label className="profile__parameter">Имя</label>
          <input type="text" className="profile__value-edit" defaultValue={nameUser} onChange={handleChangeName} />
        </form>
        <form className="profile__info-edit">
          <label className="profile__parameter">E-mail</label>
          <input className="profile__value-edit" defaultValue={emailUser} onChange={handleChangeEmail} />
        </form>
      {validationProfile ? (
        <div className="profile__save">
          <span className="profile__error">При обновлении профиля произошла ошибка.</span>
          <button type="button" className="button__save-profile button__save-profile_error">Сохранить</button>
        </div>) :
    (<button type="submit" className="button__save-profile" onClick={saveProfile} onSubmit={handleSubmit}>Сохранить</button>)}
      </>)}

    </section>
  )
};

export default Profile;

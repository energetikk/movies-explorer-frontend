import React from "react"
import { useState, useContext, useEffect } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


const Profile = ({ singOut, nameUser, emailUser, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(nameUser);
  const [email, setEmail] = useState(emailUser);
  //Для отображения страницы с непройденной валидацией необходимо ниже вручную поменять стейт переменной validationProfile
  const [validationProfile, setValidationProfile] = useState(false);
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function editProfile() {
    setNameInput(name);
    setEmailInput(email);
    setEditMode(true);
  }

  function handleChangeName(evt) {
    console.log(evt.target.value);
    setNameInput(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmailInput(evt.target.value);
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    setName(nameInput);
    setEmail(emailInput);
    onUpdateUser({ name: nameInput, email: emailInput });
    setEditMode(false);
  }


  useEffect(() => {
    setNameInput({name: currentUser.name});
    setEmailInput({email: currentUser.email});
  }, [currentUser]);


  return (
    <section className="profile__container">
      <h2 className="profile__title">Привет, {currentUser.name === undefined ? nameUser : currentUser.name}!</h2>
{ !editMode ?
      (<>
      <div className="profile__info">
        <p className="profile__parameter">Имя</p>
        <p className="profile__value">{currentUser.name === undefined ? nameUser : currentUser.name}</p>
      </div>
      <div className="profile__info">
        <p className="profile__parameter">E-mail</p>
        {/* <p className="profile__value">{email}</p> */}
        <p className="profile__value">{currentUser.email === undefined ? emailUser : currentUser.email}</p>
      </div>
      <button type="button" className="button__edit" onClick={editProfile}>Редактировать</button>
      <button type="button" className="button__logout" onClick={singOut}>Выйти из аккаунта</button></>) :
      (<>
        <form className="profile__info-edit">
          <label className="profile__parameter">Имя</label>
          {/* <input type="text" className="profile__value-edit" defaultValue={nameUser} onChange={handleChangeName} /> */}
          <input type="text" className="profile__value-edit" value={nameInput} onChange={handleChangeName} />
        </form>
        <form className="profile__info-edit">
          <label className="profile__parameter">E-mail</label>
          {/* <input className="profile__value-edit" defaultValue={emailUser} onChange={handleChangeEmail} /> */}
          <input className="profile__value-edit" value={emailInput} onChange={handleChangeEmail} />
        </form>
      {validationProfile ? (
        <div className="profile__save">
          <span className="profile__error">При обновлении профиля произошла ошибка.</span>
          <button type="button" className="button__save-profile button__save-profile_error">Сохранить</button>
        </div>) :
    (<form onSubmit={handleSubmit}>
    <button type="submit" className="button__save-profile">Сохранить</button>
    </form>)
    }


      </>)}

    </section>
  )
};

export default Profile;

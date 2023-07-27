import React from "react"
import "./profile.css"

const Profile = () => {
  return (
    <div className="profile__container">
      <h2 className="profile__title">Привет, Павел!</h2>

      <div className="profile_info">
        <p className="profile_parameter">Имя</p>
        <p className="profile_value">Павел</p>
      </div>

      <div className="profile_info">
        <p className="profile_parameter">E-mail</p>
        <p className="profile_value">email@yandex.ru</p>
      </div>

      <button type="button" className="button_edit">Редактировать</button>
      <button type="button" className="button_logout">Выйти из аккаунта</button>

    </div>
  )
};

export default Profile;

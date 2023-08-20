import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import {useForm} from "../hooks/useForm"
import "./authForm.css";

function AuthForm({
  name,
  title,
  textButton,
  handleCheckRegister,
  handleCheckLogin,
}) {
  // const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
    nameuser: "",
  });

  const handleChangeInput = (evt) => {
    const { name, value } = evt.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { nameuser, password, email } = formValue;
    if (name === "register") {
      handleCheckRegister(nameuser, password, email);
    } else {
      handleCheckLogin(password, email);
    }
  };

  return (
    <header className="auth__container">
      <form
        name={`${name}-form`}
        className="form__auth"
        onSubmit={handleSubmit}
        noValidate
      >
        <Link to='/' className="logo-auth"></Link>
        <h2 className="form__title-auth">{title}</h2>
        {name === "register" && (
          <div className="input-block">
          <div className="nameinput-nameuser">Имя</div>
            <input
              id="input-nameuser"
              required
              minLength="2"
              maxLength="40"
              type="text"
              placeholder="Имя"
              name="nameuser"
              className="form__item-auth form__item_el_nameuser"
              onChange={handleChangeInput}
              value={formValue.nameuser || ""}
            />
            <span id="input-nameuser-error" className="popup__error"></span>

          </div>
        )}

        <div className="input-block">
        <div className="nameinput-nameuser">Email</div>
        <input
          id="input-email"
          required
          minLength="2"
          maxLength="40"
          type="email"
          placeholder="E-mail"
          name="email"
          className="form__item-auth form__item_el_email"
          onChange={handleChangeInput}
          value={formValue.email || ""}
        />
        <span id="input-email-error" className="popup__error"></span>
        </div>

        <div className="input-block">
        <div className="nameinput-nameuser">Пароль</div>
        <input
          id="input-password"
          required
          minLength="2"
          maxLength="200"
          type="password"
          placeholder="Пароль"
          name="password"
          className="form__item-auth form__item_el_password"
          onChange={handleChangeInput}
          value={formValue.password || ""}
        />
        <span id="input-password-error" className="popup__error">Что-то пошло не так...</span>
        </div>
        {/* <button type="submit" className="auth__submit"> */}
        <button type="submit" className={`${name === 'register' ? 'auth__submit' : 'auth__submit_signin'}`}>
          {textButton}
        </button>
      </form>

      {name === "register" ? (
        <div className="link-auth">
          <p className="question-auth">Уже зарегистрированы?</p>
          <Link to="/signin" className="button__signin">
            Войти
          </Link>
        </div>
      ) : (
        <div className="link-auth">
          <p className="question-auth">Еще не зарегестрированы?</p>
          <Link to="/signup" className="button__signin">
            Регистрация
          </Link>
        </div>
      )}
    </header>
  );
}

export default AuthForm;

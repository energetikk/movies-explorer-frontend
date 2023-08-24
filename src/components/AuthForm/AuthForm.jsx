import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import {useForm} from "../hooks/useForm"
import "./authForm.css";
// import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import useInput from "../../hooks/useForm"


function AuthForm({
  name,
  title,
  textButton,
  handleCheckRegister,
  handleCheckLogin,
}) {

  // const useValidation = (formValue, validations) => {
  //   const [isEmpty, setIsEmpty] = useState(true);
  //   const [minLengthError, setMinLengthError] = useState(false);
  //   const [maxLengthError, setMaxLengthError] = useState(false);
  //   const [emailError, setEmailError] = useState(false);
  //   const [inputValid, setInputValid] = useState(false);


  //   useEffect(() => {
  //     for (const validation in validations) {
  //       switch (validation) {
  //         case "minLength":
  //           formValue.length < validations[validation]
  //             ? setMinLengthError(true)
  //             : setMinLengthError(false);
  //           break;
  //         case "maxLength":
  //           formValue.length > validations[validation]
  //             ? setMaxLengthError(true)
  //             : setMaxLengthError(false);
  //           break;
  //         case "isEmpty":
  //           formValue ? setIsEmpty(false) : setIsEmpty(true);
  //           break;
  //         case "emailRegEx":
  //           const regEx = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  //           regEx.test(String(formValue).toLowerCase()) ? setEmailError(false) : setEmailError(true);
  //           break;
  //           default:

  //       }
  //     }
  //   }, [formValue]);

  //   useEffect(() => {
  //     if (isEmpty || minLengthError || maxLengthError || emailError) {
  //       setInputValid(false);
  //     } else {
  //       setInputValid(true);
  //     }
  //   }, [isEmpty, minLengthError, maxLengthError, emailError])

  //   return {
  //     isEmpty,
  //     minLengthError,
  //     maxLengthError,
  //     emailError,
  //     inputValid
  //   };
  // };

  // function useInput(inputValues, validations) {
  //   const [formValue, setFormValue] = useState(inputValues);
  //   // Сосотояние вышли или нет из инпута
  //   const [isDirty, setIsDirty] = useState(false);
  //   const valid = useValidation(formValue, validations);
  //   const handleChangeInput = (evt) => {
  //     const { value, name } = evt.target;
  //     // setFormValue({ ...formValue, [name]: value });
  //     setFormValue(evt.target.value);
  //   };

  //   const onBlur = () => {
  //     setIsDirty(true);
  //   };

  //   return {
  //     formValue,
  //     setFormValue,
  //     handleChangeInput,
  //     onBlur,
  //     isDirty,
  //     ...valid,
  //   };
  // }



  const nameuser = useInput("", {isEmpty: true, minLength: 2, maxLength: 40 });
  const email = useInput("", { isEmpty: true, emailRegEx: true});
  const password = useInput("", { isEmpty: true, minLength: 5, maxLength: 16 });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const { nameuser, password, email } = formValue;
    if (name === "register") {
      handleCheckRegister(
        nameuser.formValue,
        password.formValue,
        email.formValue
      );
    } else {
      handleCheckLogin(password.formValue, email.formValue);
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
        <Link to="/" className="logo-auth"></Link>
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
              onChange={(evt) => nameuser.handleChangeInput(evt)}
              // value={formValue.nameuser || ""}
              value={nameuser.formValue || ""}
              onBlur={(evt) => nameuser.onBlur(evt)}
            />
            {nameuser.isDirty && nameuser.minLengthError && (
            <span id="input-nameuser-error" className="popup__error">
              не моет быть меньше 3 символов
            </span>
          )}
          {nameuser.isDirty && nameuser.isEmpty && (
            <span id="input-nameuser-error" className="popup__error">
              Заполните поле!!!
            </span>
          )}
            {/* <span id="input-nameuser-error" className="popup__error"></span> */}
          </div>
        )}

        <div className="input-block">
          <div className="nameinput-nameuser">Email</div>
          {/* {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Заполните поле!!!</div>} */}
          <input
            id="input-email"
            required
            minLength="2"
            maxLength="40"
            type="email"
            placeholder="E-mail"
            name="email"
            className="form__item-auth form__item_el_email"
            onChange={(evt) => email.handleChangeInput(evt)}
            value={email.formValue || ""}
            onBlur={(evt) => email.onBlur(evt)}
          />
          <span className="input-errors">
          {email.isDirty && email.emailError && (
            <span id="input-email-error" className="popup__error">
              Не правильный Email!
            </span>
          )}
          {email.isDirty && email.isEmpty && (
            <span id="input-email-error" className="popup__error">
              Заполните поле!
            </span>
          )}
          </span>
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
            onChange={(evt) => password.handleChangeInput(evt)}
            // value={formValue.password || ""}
            value={password.formValue || ""}
            onBlur={(evt) => password.onBlur(evt)}
          />
          <span className="input-errors">
          {password.isDirty && password.minLengthError && (
            <span id="input-password-error" className="popup__error">
              Пароль должен быть от 3 до 16 символов!
            </span>
          )}
          {password.isDirty && password.isEmpty && (
            <span id="input-password-error" className="popup__error">
              Заполните поле!
            </span>
          )}
          </span>

          {/* <span id="input-password-error" className="popup__error"> */}

          {/* </span> */}
        </div>
        {/* <button type="submit" className="auth__submit"> */}
        {name === "register" ? (<button
          // disabled={(name === "register" && (!nameuser.inputValid || !email.inputValid || !password.inputValid)) || (name === "login" && (!email.inputValid || !password.inputValid))}
          disabled={!nameuser.inputValid || !email.inputValid || !password.inputValid}
          type="submit"
          className={`${(!nameuser.inputValid || !email.inputValid || !password.inputValid) && 'auth__submit_disable'} auth__submit`}>{textButton}</button>) :
          (<button
            // disabled={(name === "register" && (!nameuser.inputValid || !email.inputValid || !password.inputValid)) || (name === "login" && (!email.inputValid || !password.inputValid))}
            disabled={!email.inputValid || !password.inputValid}
            type="submit"
            className={`${(!email.inputValid || !password.inputValid) && 'auth__submit_disable'} auth__submit`}>{textButton}</button>)}



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

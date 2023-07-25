import React from "react"
import AuthForm from "../AuthForm/AuthForm";

function Register({handleCheckRegister}) {
  return (
       <AuthForm name={'register'} title={'Регистрация'}  textButton={'Зарегестрироваться'} handleCheckRegister={handleCheckRegister} />
  )
};

export default Register;



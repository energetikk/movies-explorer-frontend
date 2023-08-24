import React from "react";
import { useState, useRef } from "react";
import { regExpName } from "../utils/regEx";

export function useFormWithValidation() {
  const formRef = useRef(null);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    film: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt, form) => {
    const { name, value } = evt.target;

    const isName = name === "name";
    const isNameValid = isName ? regExpName.test(value) : true;
    const errorMessage = !isNameValid
      ? evt.target.validationMessage ||
        "Имя может содержать только латиницу, кириллицу, пробел или дефис."
      : evt.target.validationMessage;

    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
    setIsValid(isNameValid && formRef.current.checkValidity());
    // setIsValid(isNameValid && form.checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
    resetForm,
    formRef,
  };
}

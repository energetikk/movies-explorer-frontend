import React from "react"
import "./PageNotFound.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

function PageNotFound({setErrorPage}) {
  useEffect(() => {
    setErrorPage(true);
  }, [setErrorPage]);

  return (
    <div className="not-found">
      <h1 className="not-found_title">404</h1>
      <h2 className="not-found_subtitle">Страница не найдена</h2>
      <Link to="/sign-in" className="button-back">Назад</Link>
    </div>
  )
};

export default PageNotFound;

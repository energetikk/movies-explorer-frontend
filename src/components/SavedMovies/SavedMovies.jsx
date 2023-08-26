import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

// const SavedMovies = ({isTablet, saviedMovies, onMovieDelete, setKeysWords, keysWords, checkBoxStatus, setCheckBoxStatus}) => {
const SavedMovies = ({
  isTablet,
  saviedMovies,
  onMovieDelete,
  setKeysWords,
  keysWords,
  checkBoxStatus,
  setCheckBoxStatus,
  keysWordsSaviedSearch,
  setKeysWordsSaviedSearch
}) => {
  // const [saviedRawMovies, setSaviedRawMovies] = useState(JSON.parse(localStorage.getItem('baseFilms')) || []);
  // const [keysWords, setKeysWords] = useState(localStorage.getItem('keysWords') || '');
  // const [checkBoxStatus, setCheckBoxStatus] = useState(JSON.parse(localStorage.getItem('checkBoxStatus')));

  function filter(saviedMovies) {
    return saviedMovies.filter((movie) =>
      !checkBoxStatus
        ? movie.nameRU.toLowerCase().includes(keysWords)
        : movie.nameRU.toLowerCase().includes(keysWords) && movie.duration <= 40
    );
  }

  return (
    <main className="saved-movies__container">
      <SearchForm
        keysWords={keysWords}
        setKeysWords={setKeysWords}
        checkBoxStatus={checkBoxStatus}
        setCheckBoxStatus={setCheckBoxStatus}
        keysWordsSaviedSearch={keysWordsSaviedSearch}
        setKeysWordsSaviedSearch={setKeysWordsSaviedSearch}
      />
      {/* <MoviesCardList  isTablet={isTablet} saviedMovies={saviedMovies} onMovieDelete={onMovieDelete} /> */}
      <MoviesCardList
        isTablet={isTablet}
        saviedMovies={filter(saviedMovies)}
        onMovieDelete={onMovieDelete}
      />
    </main>
  );
};

export default SavedMovies;

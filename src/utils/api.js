class Api {
  constructor(config) {
    // eslint-disable-next-line no-unused-expressions
    this._url = config.url,
    this._headers = config.headers
  }


//Получить начальные карточки с сервера
  getInitialCards() {
    return fetch(this._url, {
      headers: {authorization: 'edc06021-97df-405d-a469-7d3ba7b0f077'
      }})
      .then(this._checkResponse)
  }
//Добавить карточку на сервер
  addCard(data) {
    return fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })})
      .then(this._checkResponse)
    }

//Запросить информацию о пользователе с сервера
  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-62/users/me', {
    method: 'GET',
    headers: {authorization: 'edc06021-97df-405d-a469-7d3ba7b0f077'}
  })
  .then(this._checkResponse)
  }

//Записать обновленную информацию о пользователе на сервер
  setUserInfo(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/users/me/', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.description
      })})
  .then(this._checkResponse)
}

//Записать обновленный аватар пользователя на сервер
  setAvatar(data) {
    console.log(data)
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })})
  .then(this._checkResponse)
}

//Запрос на удаление карточки с сервера
deleteCard(cardId) {
  return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}`, {
  method: 'DELETE',
  headers: this._headers
  })
  .then(this._checkResponse)
}

//Отправка запроса на присвоение лайка
setLike(cardId) {
  return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: this._headers
  })
  .then(this._checkResponse)
}

// Отправка запроса на удаление лайка
removeLike(cardId) {
  return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: this._headers
  })
  .then(this._checkResponse)
}

//Проверка ответа от сервера
_checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}`); // если ошибка, отклоняем промис
}

changeLikeCardStatus(cardId, isLiked) {
  if (isLiked) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: this._headers
  })
  .then(this._checkResponse)
  } else {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: this._headers
  })
  .then(this._checkResponse)
  }
}


}

const api = new Api({url: 'https://mesto.nomoreparties.co/v1/cohort-62/cards',
headers: {
 authorization: 'edc06021-97df-405d-a469-7d3ba7b0f077',
 "Content-Type": "application/json"
 }
})


export default api;

export const BASE_URL = 'http://localhost:3000/';
// export const BASE_URL = 'https://mestogramback.nomoreparties.sbs/';

//Проверка ответа от сервера
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}`); // если ошибка, отклоняем промис
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name, email, password })
  })
  .then(res => checkResponse(res));
}

export const authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}signin`, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    })
    .then(res => checkResponse(res));

  };

export const getContent = (token) => {
    return fetch(`${BASE_URL}users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    })
      .then(res => checkResponse(res))
      .then(data => data);
  };




  export const getUserInfo = () => {
    return fetch(`${BASE_URL}users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => checkResponse(res));
  };

  export const setUserInfo = (data) => {
    return fetch(`${BASE_URL}users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
      }),
    }).then((res) => checkResponse(res));
  };


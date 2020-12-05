
import {BASE_URL} from '../constants/constants';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password,
      'name': name
    }),
  })
    .then((res) => {
      if (res.status !== 400) {
        return res.json();
      }
      throw new Error('Некорректно заполнено одно из полей');
    })
    .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json()
        }
        if (res.status === 400) {
          return console.log('Одно из полей не передано')
        }
        if (res.status === 401) {
          return console.log('Пользователь с таким email не  найден')
        }
      }
      catch (error) {
        return error
      }
    })
    .then((data) => {
      if (data) {
        localStorage.setItem('jwt', data.token);
        return data.token;
      }
    })
    .catch(err => console.log(err))
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      if (!res.ok) {
        return res.json()
          .then((err) => {
            console.log(err.message);
          });
      }
      return res.json();
    })
    .then(data => data)
    .catch(err => console.log(err))
}


//метод отправления карточки на сервер
export const sendCard = (data, token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      keyword: `${data.keyword}`,
      title: `${data.title}`,
      text: `${data.text}`,
      date: `${data.date}`,
      source: `${data.source}`,
      link: `${data.link}`,
      image: `${data.image}`
    })
  })
    .then((res) => {

      if (!res.ok) {
        return res.json()
          .then((err) => {
            console.log(err.message);
          });
      }
      return res.json();
    })
    .then(data => data)
    .catch((err) => console.log(err));
}


export const getCards = (token) => { // метод получения карточки с сервера
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.message);
    })
    .catch((err) => console.log(err));
}

export const deleteCard = (token, id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.message);
    })
    .catch((err) => console.log(err));
}

import {apiConfig} from "./constants";

export const onResponce = (res) => {
  return res.ok ? res.json() : Promise.reject('Ошибка : ' + res);
}

export function getUserInfo() {
  return fetch(`${apiConfig.url}/users/me`, {headers: apiConfig.headers})
    .then(onResponce)
    .catch(err => console.log(err))
}

export function getCards() {
  return fetch(`${apiConfig.url}cards`, {headers: apiConfig.headers})
    .then(onResponce)
    .catch(err => console.log(err));
}

export function updateProfile(profileData) {
  return fetch(`${apiConfig.url}users/me`, {
      method: 'PATCH',
      headers: apiConfig.headers,
      body: JSON.stringify(profileData)
    }
  )
    .then(onResponce)
    .catch(err => console.log(err))
}

export function updateAvatar(avatarLink) {
  return fetch(`${apiConfig.url}users/me/avatar`, {
      method: 'PATCH',
      headers: apiConfig.headers,
      body: JSON.stringify(avatarLink)
    }
  )
    .then(onResponce)
    .catch(err => console.log(err))
}

export function addCard(cardData) {
  return fetch(`${apiConfig.url}cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify(cardData)
  })
    .then(onResponce)
    .catch(err => console.log(err))
}

export function deleteCard(data) {
  return fetch(`${apiConfig.url}cards/${data._id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then(onResponce)
    .catch(err => console.log(err))
}

export function addLike(data) {
  return fetch(`${apiConfig.url}cards/likes/${data._id}`, {
    method: 'PUT',
    headers: apiConfig.headers
  })
    .then(onResponce)
    .catch(err => console.log(err))
}

export function deleteLike(data) {
  return fetch(`${apiConfig.url}cards/likes/${data._id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then(onResponce)
    .catch(err => console.log(err));
}
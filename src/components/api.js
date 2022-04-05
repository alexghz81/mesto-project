import {apiConfig} from "./constants";

export const checkResponce = (res) => {
  return res.ok ? res.json() : Promise.reject('Ошибка : ' + res);
}

export function getUserInfo() {
  return fetch(`${apiConfig.url}/users/me`, {headers: apiConfig.headers})
    .then(checkResponce)
}

export function getCards() {
  return fetch(`${apiConfig.url}cards`, {headers: apiConfig.headers})
    .then(checkResponce)
}

export function updateProfile(profileData) {
  return fetch(`${apiConfig.url}users/me`, {
      method: 'PATCH',
      headers: apiConfig.headers,
      body: JSON.stringify(profileData)
    }
  )
    .then(checkResponce)
}

export function updateAvatar(avatarLink) {
  return fetch(`${apiConfig.url}users/me/avatar`, {
      method: 'PATCH',
      headers: apiConfig.headers,
      body: JSON.stringify(avatarLink)
    }
  )
    .then(checkResponce)
}

export function addCard(cardData) {
  return fetch(`${apiConfig.url}cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify(cardData)
  })
    .then(checkResponce)
}

export function deleteCard(data) {
  return fetch(`${apiConfig.url}cards/${data._id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then(checkResponce)
}

export function addLike(data) {
  return fetch(`${apiConfig.url}cards/likes/${data._id}`, {
    method: 'PUT',
    headers: apiConfig.headers
  })
    .then(checkResponce)
}

export function deleteLike(data) {
  return fetch(`${apiConfig.url}cards/likes/${data._id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then(checkResponce)
}
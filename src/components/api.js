import {apiConfig} from "./constants";

export const onResponce = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
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

export function addCard (cardData) {
  return fetch(`${apiConfig.url}cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify(cardData)
  })
    .then(onResponce)
    .catch(err => console.log(err))
}

export function deleteCard (data) {
  console.log(data)
  return fetch(`${apiConfig.url}cards/${data._id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then(onResponce)
    .catch(err=> console.log(err))
}
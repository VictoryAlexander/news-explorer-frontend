import { handleServerResponse, baseUrl } from "./api";

function register(email, password, name) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name })
  })
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    if (res.message) {
      return Promise.reject(`${res.message}`)
    }
    return res;
  })
};

function signIn(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    if (res.message) {
      return Promise.reject(`${res.message}`)
    }
    return res;
  })
};

function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  .then(handleServerResponse);
};

const auth = { register, signIn, checkToken };

export default auth;
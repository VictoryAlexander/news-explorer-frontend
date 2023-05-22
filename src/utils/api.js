const baseUrl = 'http://localhost:3001'; //This temporary for json-server tool

export function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getArticleList() {
  return fetch(`${baseUrl}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(handleServerResponse)
}

function addSavedArticle() {
  return fetch(`${baseUrl}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(handleServerResponse)
}

function removeSavedArticle(id) {
  return fetch(`${baseUrl}/articles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(handleServerResponse)
}

const api = { getArticleList, addSavedArticle, removeSavedArticle };

export default api;
export const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://api.news-explorer.hbmc.net'
  : 'http://localhost:3000';

export function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getArticleList(token) {
  return fetch(`${baseUrl}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }).then(handleServerResponse)
}

function addSavedArticle(savedArticle, keyword, token) {
  const source = savedArticle.source;
  const title = savedArticle.title;
  const text = savedArticle.text;
  const link = savedArticle.link;
  const image = savedArticle.image;
  const date = savedArticle.date;
  return fetch(`${baseUrl}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      source,
      title,
      text,
      link,
      image,
      date,
      keyword
    })
  }).then(handleServerResponse)
}

function removeSavedArticle(id, token) {
  return fetch(`${baseUrl}/articles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }).then(handleServerResponse)
}

const api = { getArticleList, addSavedArticle, removeSavedArticle };

export default api;
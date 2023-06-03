import { handleServerResponse } from "./api";
import { apiKey, day, month, oneWeekPriorDay, oneWeekPriorMonth, oneWeekPriorYear, year } from "./constants";


function getNewsResults(keyWord) {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${keyWord}&from=${oneWeekPriorYear}-${oneWeekPriorMonth}-${oneWeekPriorDay}&to=${year}-${month}-${day}&sortBy=popularity&apiKey=${apiKey}`
  ).then(handleServerResponse);
}

function refineDataFromNewsApi(data) {
  const newsArticles = data.articles;
  if (!newsArticles) {
    return null;
  }
  newsArticles.forEach((item, i) => {
    item._id = i + 1;
    item.saves = false;
  })
  return newsArticles;
}

export { getNewsResults, refineDataFromNewsApi };
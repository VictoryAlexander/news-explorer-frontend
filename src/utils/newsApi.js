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
  const refinedArticles = [];
  newsArticles.forEach((item, i) => {
    let articleObject = {};
    articleObject.source = item.source.name;
    articleObject.title = item.title;
    articleObject.text = item.description;
    articleObject.link = item.url;
    articleObject.image = item.urlToImage;
    articleObject.date = item.publishedAt;
    articleObject._id = i;
    articleObject.saved = false;
    refinedArticles.push(articleObject);
  })
  return refinedArticles;
}

export { getNewsResults, refineDataFromNewsApi };
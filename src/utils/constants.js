const apiKey = 'ea1e50bc1a7d45f698d6c999b171075a';
const day = new Date().getDate();
const month = (new Date().getMonth()) + 1;
const year = new Date().getFullYear();
const oneWeekPrior = new Date(Date.now()-7*24*60*60*1000);
const oneWeekPriorDay = oneWeekPrior.getDate();
const oneWeekPriorMonth = (oneWeekPrior.getMonth()) + 1;
const oneWeekPriorYear = oneWeekPrior.getFullYear();

export { apiKey, day, month, year, oneWeekPriorDay, oneWeekPriorMonth, oneWeekPriorYear };
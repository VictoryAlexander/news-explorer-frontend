import { useContext } from 'react';
import './SavedNewsSummary.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsSummary({ savedCards }) {
  const currentUser = useContext(CurrentUserContext);
  const username = currentUser.userInfo.name;

  function createKeywordsString() {
    const keywordsArray = [];
    let keywords = '';

    function keywordStringLooper(words) {
      words.forEach(word => {
        keywords += `${word.charAt(0).toUpperCase() + word.slice(1)}, `
      })
    }

    function sortByFrequency(array) {
      const frequency = {};
  
      array.forEach(function(value) { frequency[value] = 0; });
  
      const uniques = array.filter(function(value) {
          return ++frequency[value] === 1;
      });
  
      return uniques.sort(function(a, b) {
          return frequency[b] - frequency[a];
      });
    }

    savedCards.forEach(item => {
      keywordsArray.push(item.keyword);
    })

    const sortedKeywords = sortByFrequency(keywordsArray);

    if (sortedKeywords.length <= 2) {
      keywordStringLooper(sortedKeywords);
      keywords.slice(0, keywords.length-2);
      return keywords;
    }
    const shortKeywordsArray = sortedKeywords.slice(0, 2);
    keywordStringLooper(shortKeywordsArray);
    return keywords += `and ${keywordsArray.length - 2} others`;
  }

  return (
    <section className="savedNewsSummary">
      <h1 className="savedNewsSummary__header">Saved articles</h1>
      <p className="savedNewsSummary__note">{username}, you have {savedCards.length} saved articles</p>
      <p className="savedNewsSummary__keywords">
        By keywords:&nbsp;
        <span className="keywords">{createKeywordsString()}</span>
      </p>
    </section>
  )
}

export default SavedNewsSummary;
import { useContext } from 'react';
import './SavedNewsSummary.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsSummary({ savedCards }) {
  const currentUser = useContext(CurrentUserContext);

  function createKeywordsString() {
    const keywordsArray = [];
    let keywords = '';

    function keywordStringLooper(words) {
      words.forEach(word => {
        keywords += `${word.charAt(0).toUpperCase() + word.slice(1)}, `
      })
    }

    savedCards.forEach(item => {
      if (!keywordsArray.includes(item.keyword)) {
        keywordsArray.push(item.keyword);
      }
    })

    if (keywordsArray.length <= 2) {
      keywordStringLooper(keywordsArray);
      keywords.slice(0, keywords.length-2);
      return keywords;
    }
    const shortKeywordsArray = keywordsArray.slice(0, 2);
    keywordStringLooper(shortKeywordsArray);
    return keywords += `and ${keywordsArray.length - 2} others`
  }

  return (
    <section className="savedNewsSummary">
      <h1 className="savedNewsSummary__header">Saved articles</h1>
      <p className="savedNewsSummary__note">{currentUser}, you have {savedCards.length} saved articles</p>
      <p className="savedNewsSummary__keywords">
        By keywords:&nbsp;
        <span className="keywords">{createKeywordsString()}</span>
      </p>
    </section>
  )
}

export default SavedNewsSummary;
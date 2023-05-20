import { useContext } from 'react';
import './SavedNewsSummary.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsSummary({ savedCards }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="savedNewsSummary">
      <p className="savedNewsSummary__header">Saved articles</p>
      <p className="savedNewsSummary__note">{currentUser}, you have {savedCards.length} saved articles</p>
      <p className="savedNewsSummary__keywords">
        By keywords:&nbsp;
        <span className="keywords"></span>
      </p>
    </section>
  )
}

export default SavedNewsSummary;
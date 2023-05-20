import './NewsCard.css';
import dateReformater from '../../utils/dateReformater';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import openInNewTab from '../../utils/openInNewTab';

function NewsCard({ card, handleSignInClick, onCardSave }) {
  const currentUser = useContext(CurrentUserContext);

  function cardSave() {
    if (!currentUser) {
      return false;
    }
    const isSaved = card.saves.some(user => user === currentUser);
    return isSaved;
  }

  const buttonTextClassName = `newsCard__button-text ${currentUser ? 'newsCard__button-text_hidden' : ''}`
  const saveButtonClassName = `newsCard__save-button ${cardSave() ? 'newsCard__save-button_active' : ''}`

  return (
    <li className='newsCard'>
      <img className='newsCard__image' src={card.urlToImage} alt={card.title} />
      <div className='newsCard__button-container'>
        <button type='button' className={saveButtonClassName} onClick={currentUser ? onCardSave(card._id, cardSave()) : handleSignInClick} />
        <p className={buttonTextClassName}>Sign in to save articles</p>
      </div>
      <div className='newsCard__container' onClick={() => openInNewTab(card.url)}>
        <p className='newsCard__date'>{dateReformater(card.publishedAt)}</p>
        <p className='newsCard__title'>{card.title}</p>
        <p className='newsCard__description'>{card.description}</p>
        <p className='newsCard__footer'>{card.source.name}</p>
      </div>
    </li>
  )
}

export default NewsCard;
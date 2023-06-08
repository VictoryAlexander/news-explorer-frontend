import './NewsCard.css';
import dateReformater from '../../utils/dateReformater';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import openInNewTab from '../../utils/openInNewTab';

function NewsCard({ card, handleSignInClick, onCardSave }) {
  const currentUser = useContext(CurrentUserContext);
  const buttonTextClassName = `newsCard__button-text ${currentUser ? 'newsCard__button-text_hidden' : ''}`
  const saveButtonClassName = `newsCard__save-button ${card.saved ? 'newsCard__save-button_active' : ''}`;

  return (
    <li className='newsCard'>
      <img className='newsCard__image' src={card.image} alt={card.title} />
      <div className='newsCard__button-container'>
        <button type='button' className={saveButtonClassName} onClick={() => currentUser ? onCardSave(card) : handleSignInClick('signIn')}/>
        <p className={buttonTextClassName}>Sign in to save articles</p>
      </div>
      <div className='newsCard__container' onClick={() => openInNewTab(card.link)}>
        <p className='newsCard__date'>{dateReformater(card.date)}</p>
        <h3 className='newsCard__title'>{card.title}</h3>
        <p className='newsCard__description'>{card.text}</p>
        <p className='newsCard__footer'>{card.source}</p>
      </div>
    </li>
  )
}

export default NewsCard;
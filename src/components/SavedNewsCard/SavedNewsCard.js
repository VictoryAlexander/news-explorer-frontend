import dateReformater from '../../utils/dateReformater';
import './SavedNewsCard.css';

function SavedNewsCard({ card, onCardDelete }) {
  return (
    <li className='newsCard'>
      <img className='newsCard__image' src={card.urlToImage} alt={card.title} />
      <div className='newsCard__button-container'>
        <button type='button' className='newsCard__save-button newsCard__save-button_delete' onClick={onCardDelete} />
        <p className='newsCard__button-text'>Remove from saved</p>
      </div>
      <div className='newsCard__container'>
        <p className='newsCard__date'>{dateReformater(card.publishedAt)}</p>
        <p className='newsCard__title'>{card.title}</p>
        <p className='newsCard__description'>{card.description}</p>
        <p className='newsCard__footer'>{card.source.name}</p>
      </div>
    </li>
  )
}

export default SavedNewsCard;
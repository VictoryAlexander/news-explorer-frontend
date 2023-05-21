import dateReformater from '../../utils/dateReformater';
import openInNewTab from '../../utils/openInNewTab';
import './SavedNewsCard.css';

function SavedNewsCard({ card, onCardDelete }) {
  const cardKeyword = card.keyword;
  const refinedCardKeyword = cardKeyword.charAt(0).toUpperCase() + cardKeyword.slice(1);

  return (
    <li className='newsCard'>
      <img className='newsCard__image' src={card.urlToImage} alt={card.title} />
      <div className='newsCard__button-container newsCard__button-container_saved'>
        <button type='button' className='newsCard__save-button newsCard__save-button_delete' onClick={(e) => {
          e.preventDefault();
          onCardDelete(card); 
        }}/>
        <p className='newsCard__button-text'>Remove from saved</p>
        <p className='newsCard__tag'>{refinedCardKeyword}</p>
      </div>
      <div className='newsCard__container' onClick={() => openInNewTab(card.url)}>
        <p className='newsCard__date'>{dateReformater(card.publishedAt)}</p>
        <h2 className='newsCard__title'>{card.title}</h2>
        <p className='newsCard__description'>{card.description}</p>
        <p className='newsCard__footer'>{card.source.name}</p>
      </div>
    </li>
  )
}

export default SavedNewsCard;
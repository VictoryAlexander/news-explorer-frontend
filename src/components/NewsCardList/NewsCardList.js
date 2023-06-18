import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, handleSignInClick, onCardSave, onLoadMoreClick }) {
  return(
    <section className='newsCards'>
      <h2 className='newsCards__title'>Search results</h2>
      <ul className='newsCards__list'>
        {cards.map((card) => (
          <NewsCard
            key={card._id}
            card={card}
            handleSignInClick={handleSignInClick}
            onCardSave={onCardSave}
          />
        ))}
      </ul>
      <button type='button' className='newsCards__button' onClick={onLoadMoreClick}>Show more</button>
    </section>
  )
}

export default NewsCardList;
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useEffect, useState } from 'react';

function NewsCardList({ cards, handleSignInClick, onCardSave, handleCardDelete }) {
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  const pageSize = 3;

  useEffect(() => {
    const numberOfItems = pageSize*(index + 1);
    const newCards = [];

    cards.forEach((item, i) => {
      if (i < numberOfItems) {
        newCards.push(item);
      }
    })

    setVisibleData(newCards);
  }, [index])

  return(
    <section className='newsCards'>
      <h2 className='newsCards__title'>Search results</h2>
      <ul className='newsCards__list'>
        {visibleData.map((card) => (
          <NewsCard
            key={card._id}
            card={card}
            handleSignInClick={handleSignInClick}
            onCardSave={onCardSave}
            handleCardDelete={handleCardDelete}
          />
        ))}
      </ul>
      <button type='button' className='newsCards__button' onClick={() => setIndex(index + 1)}>Show more</button>
    </section>
  )
}

export default NewsCardList;
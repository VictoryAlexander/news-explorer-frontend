import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useEffect, useState } from 'react';

function NewsCardList({ cards, handleSignInClick, onCardSave }) {
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
      <p className='newsCards__title'>Search results</p>
      <ul className='newsCards__list'>
        {visibleData.map((card, index) => (
          <NewsCard
            key={index}
            card={card}
            handleSignInClick={handleSignInClick}
            onCardSave={onCardSave}
          />
        ))}
      </ul>
      <button type='button' className='newsCards__button' onClick={() => setIndex(index + 1)}>Show more</button>
    </section>
  )
}

export default NewsCardList;
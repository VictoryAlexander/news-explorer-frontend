import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";

function SavedNewsList({ cards, onCardDelete }) {
  return cards.length > 0 && (
    <section className='newsCards'>
      <ul className='newsCards__list'>
        {cards.map((card) => (
          <SavedNewsCard 
            key={card._id}
            card={card}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </section>
  )
}

export default SavedNewsList;
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults({ loading, cards, handleSignInClick, onCardSave, handleCardDelete, onLoadMoreClick }) {

  if (loading === 'loading') {
    return (
      <section className='searchResults'>
        <i className='searchResults__icon searchResults__icon_loading' />
        <p className='searchResults__description'>Searching for news...</p>
      </section>
    )
  }

  if (loading === 'results') {
    return(
      <NewsCardList 
        cards={cards} 
        handleSignInClick={handleSignInClick}
        onCardSave={onCardSave}
        handleCardDelete={handleCardDelete}
        onLoadMoreClick={onLoadMoreClick}
      />
    )
  }

  if (loading === 'notFound') {
    return (
      <section className='searchResults'>
        <i className='searchResults__icon' />
        <h2 className='searchResults__title'>Nothing Found</h2>
        <p className='searchResults__description'>Sorry, but nothing matched your search terms.</p>
      </section>
    )
  }

  return null;
}

export default SearchResults;
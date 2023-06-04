import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';

function Main({ loading, cards, handleNewsSearch, handleSignInClick, onCardSave, handleCardDelete, onLoadMoreClick }) {
  return (
    <main className="main">
      <SearchForm 
        handleNewsSearch={handleNewsSearch}
      />
        <SearchResults
          loading={loading}
          cards={cards}
          handleSignInClick={handleSignInClick}
          onCardSave={onCardSave}
          handleCardDelete={handleCardDelete}
          onLoadMoreClick={onLoadMoreClick}
        />
      <About />
    </main>
  )
}

export default Main;
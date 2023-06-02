import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';

function Main({ loading, newsData, handleNewsSearch, handleSignInClick, onCardSave, handleCardDelete }) {
  return (
    <main className="main">
      <SearchForm 
        handleNewsSearch={handleNewsSearch}
      />
        <SearchResults
          loading={loading}
          cards={newsData}
          handleSignInClick={handleSignInClick}
          onCardSave={onCardSave}
          handleCardDelete={handleCardDelete}
        />
      <About />
    </main>
  )
}

export default Main;
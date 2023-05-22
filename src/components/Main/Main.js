import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';

function Main({ loading, newsData, handleNewsSearch, handleSignInClick, onCardSave }) {
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
        />
      <About />
    </main>
  )
}

export default Main;
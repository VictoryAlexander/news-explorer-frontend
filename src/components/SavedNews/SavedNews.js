import './SavedNews.css';
import SavedNewsSummary from '../SavedNewsSummary/SavedNewsSummary';
import SavedNewsList from '../SavedNewsList/SavedNewsList';

function SavedNews({ savedCards, onCardDelete }){
  return (
    <main>
      <SavedNewsSummary savedCards={savedCards} />
      <SavedNewsList 
        cards={savedCards}
        onCardDelete={onCardDelete}
      />
    </main>
  )
}

export default SavedNews;
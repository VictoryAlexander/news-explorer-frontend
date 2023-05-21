import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LoginPopup from '../LoginPopup/LoginPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import RegisterCompletePopup from '../RegisterCompletePopup/RegisterCompletePopup';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import MobileMenuPopup from '../MobileMenuPopup/MobileMenuPopup';
import MobileMenuPopupSaved from '../MobileMenuPopupSaved/MobileMenuPopupSaved';
import backgroundImage from '../../images/georgia-de-lotz--UsJoNxLaNo-unsplash v2.png';
import { getNewsResults, refineDataFromNewsApi } from '../../utils/newsApi';
import api from '../../utils/api';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  function handleNewsSearch(keyWord) {
    setLoading('loading');
    getNewsResults(keyWord)
      .then((data) => {
        if (data) {
          const refinedData = refineDataFromNewsApi(data);
          setNewsData(refinedData);
          setLoading('results');
        } else {
          setLoading('notFound');
        }
      })
      .catch((err) => console.log(err));
  }

  function closeAllModals() {
    setActiveModal(null);
  }

  useEffect(() => {
    function closeByEscape(event) {
      if (event.key === 'Escape') {
        closeAllModals();
      }
    }

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape)
  }, []);

  function handleSignUp() {
    closeAllModals();
    setActiveModal('registerComplete');
  }

  function handleSignIn(email) {
    setIsLoggedIn(true);
    setCurrentUser(email);
    localStorage.setItem('jwt', email);
    closeAllModals();
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
  }

  function handleCardSave(id, isSaved) {
    isSaved
      ?
        api
          .removeSavedArticle(id)
          .then((updatedCard) => {
            setNewsData((cards) =>
              cards.map((card) => (card._id === id ? updatedCard : card))
            );
            setSavedItems((cards) => cards.filter((c) => c._id !== id));
          })
          .catch((err) => console.log(err))
      :
        api
          .addSavedArticle()
          .then((updatedCard) => {
            setNewsData((cards) =>
              cards.map((card) => (card._id === id ? updatedCard : card))
            );
            setSavedItems([...savedItems, updatedCard])
          })
          .catch((err) => console.log(err))
  }

  function handleCardDelete(card) {
    api.removeSavedArticle(card._id)
      .then(() => {
        setSavedItems((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      api.getArticleList()
      .then((items) => {
        setSavedItems(items);
      })
      .catch((err) => console.log(err));
      setIsLoggedIn(true);
      setCurrentUser(token);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className='app__wrapper'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={
                <>
                  <Header
                    handleSignInClick={() => setActiveModal('signIn')}
                    handleSignOutClick={() => handleSignOut()}
                    handleNavClick={() => setActiveModal('mobileMenu')}
                    isLoggedIn={isLoggedIn}
                  />
                  <img className='app__background' src={backgroundImage} alt='background' />
                  {activeModal === 'mobileMenu' && (
                    <MobileMenuPopup onClose={closeAllModals} onButtonClick={() => {
                      closeAllModals();
                      setActiveModal('signIn');
                    }}
                    handleSignOutClick={() => {
                      handleSignOut();
                    }}
                    isLoggedIn={isLoggedIn}
                    />
                  )}
                  <Main
                    loading={loading}
                    newsData={newsData}
                    handleNewsSearch={handleNewsSearch}
                    handleSignInClick={() => setActiveModal('signIn')}
                    onCardSave={handleCardSave}
                  />
                </>
              }/>
              <Route path='/saved-news' element={
                isLoggedIn ?
                <>
                  <SavedNewsHeader 
                    handleSignOutClick={() => handleSignOut()}
                    handleNavClick={() => setActiveModal('mobileMenuSaved')}
                  />
                  {activeModal === 'mobileMenuSaved' && (
                    <MobileMenuPopupSaved onClose={closeAllModals} onButtonClick={() => {
                      closeAllModals();
                      setActiveModal('signIn');
                    }}
                    handleSignOutClick={() => {
                      handleSignOut();
                    }}
                    isLoggedIn={isLoggedIn}
                    />
                  )}
                  <SavedNews 
                    savedCards={savedItems}
                    onCardDelete={handleCardDelete}
                  />
                </>
                :
                <Navigate to='/' />
              }/>
            </Routes>
          <Footer />
          </BrowserRouter>
        </div>
        {activeModal === 'signIn'  && (
          <LoginPopup handleSignIn={handleSignIn} onClose={closeAllModals} onButtonClick={() => {
            closeAllModals();
            setActiveModal('signUp');
          }}/>
        )}
        {activeModal === 'signUp' && (
          <SignUpPopup handleSignUp={handleSignUp} onClose={closeAllModals} onButtonClick={() => {
            closeAllModals();
            setActiveModal('signIn');
          }}/>
        )}
        {activeModal === 'registerComplete' && (
          <RegisterCompletePopup onClose={closeAllModals} onButtonClick={() => {
            closeAllModals();
            setActiveModal('signIn');
          }}/>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
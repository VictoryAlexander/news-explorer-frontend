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
import backgroundImage from '../../images/georgia-de-lotz--UsJoNxLaNo-unsplash.jpg';
import { getNewsResults, refineDataFromNewsApi } from '../../utils/newsApi';
import api from '../../utils/api';
import auth from '../../utils/auth';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);

  function handleNewsSearch(keyWord) {
    setLoading('loading');
    getNewsResults(keyWord)
      .then((data) => {
        if (data) {
          const refinedData = refineDataFromNewsApi(data);
          setNewsData(refinedData);
          setLoading('results');
          setKeyword(keyWord);
          renderVisibleData(refinedData)
        } else {
          setLoading('notFound');
        }
      })
      .catch((err) => console.log(err));
  }

  function closeAllModals() {
    setActiveModal(null);
    setErrorMessage('');
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

  function handleSignUp(email, password, name) {
    auth.register(email, password, name)
      .then(() => {
        closeAllModals();
        setActiveModal('registerComplete');
      })
      .catch((err) => console.log(err));
  }

  function handleSignIn(email, password) {
    auth.signIn(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        const token = localStorage.getItem('jwt');
        auth.checkToken(token)
          .then((res) => {
            setCurrentUser(res);
            setIsLoggedIn(true);
          })
          .catch((err) => console.log(err));
        api.getArticleList(token)
          .then((items) => {
            setSavedItems(items);
          })
          .catch((err) => console.log(err));
        closeAllModals();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err);
      });
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedItems([]);
    localStorage.removeItem('jwt');
  }

  function handleCardSave(savedCard) {
    const token = localStorage.getItem('jwt');
    !savedCard.saved
      ?
        api
          .addSavedArticle(savedCard, keyword, token)
          .then((savedItem) => {
            setSavedItems([...savedItems, savedItem]);
            const alteredNewsData = newsData.map(data => {
              if (data._id !== savedCard._id) {
                return data;
              }
              return {
                ...data,
                _id: savedItem._id,
                saved: true,
              }
            })
            setNewsData(alteredNewsData);
            renderVisibleData(alteredNewsData);
          })
          .catch((err) => console.log(err))
      :
        api
          .removeSavedArticle(savedCard._id, token)
          .then((card) => {
            setSavedItems((cards) => cards.filter((c) => c._id !== card._id));
            const alteredNewsData = newsData.map(data => {
              if (data._id !== savedCard._id) {
                return data;
              }
              return {
                ...data,
                saved: false,
              }
            })
            setNewsData(alteredNewsData);
            renderVisibleData(alteredNewsData);
          })
          .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    const token = localStorage.getItem('jwt');
    api.removeSavedArticle(card._id, token)
      .then(() => {
        setSavedItems((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function openPopup(popup) {
    setActiveModal(popup);
  }

  function handleLoadMore() {
    setIndex(index + 1);
    renderVisibleData(newsData);
  }

  function renderVisibleData(data) {
    const pageSize = 3;
    const newCards = [];
    const numberOfItems = pageSize*(index + 1); 

    data.forEach((item, i) => {
      if (i < numberOfItems) {
        newCards.push(item);
      }
    })
    setVisibleData(newCards);
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
      api.getArticleList(token)
        .then((items) => {
          setSavedItems(items);
        })
        .catch((err) => console.log(err));
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
                    cards={visibleData}
                    handleNewsSearch={handleNewsSearch}
                    handleSignInClick={openPopup}
                    onCardSave={handleCardSave}
                    handleCardDelete={handleCardDelete}
                    onLoadMoreClick={handleLoadMore}
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
          }}
          errorMessage={errorMessage}
          />
        )}
        {activeModal === 'signUp' && (
          <SignUpPopup handleSignUp={handleSignUp} onClose={closeAllModals} onButtonClick={() => {
            closeAllModals();
            setActiveModal('signIn');
          }}
          errorMessage={errorMessage}
          />
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
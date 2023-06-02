import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Navigation({ handleSignInClick, handleSignOutClick, handleNavClick }) {
  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    return (
      <nav className="navigation">
        <ul className="navigation__container">
          <li className='navigation__list'>
            <Link to='/' className='navigation__link'>
              Home
            </Link>
          </li>
          <li>
            <button onClick={handleSignInClick} className='navigation__button'>Sign in</button>
          </li>
          <li>
            <button type='button' onClick={handleNavClick} className='navigation__mobile-button'/>
          </li>
        </ul>
      </nav>
    )
  }

  const username = currentUser.userInfo.name;

  return (
    <nav className="navigation">
      <ul className="navigation__container">
        <li className='navigation__list'>
          <Link to='/' className='navigation__link'>
            Home
          </Link>
        </li>
        <li className='navigation__list'>
          <Link to='/saved-news' className='navigation__link navigation__link_articles'>
            Saved articles
          </Link>
        </li>
        <li>
          <p className='navigation__button navigation__button_container'>
            <span className='navigation__user-text'>{username}</span>
            <button onClick={handleSignOutClick} className='navigation__sign-out'/>
          </p>
        </li>
        <li>
          <button type='button' onClick={handleNavClick} className='navigation__mobile-button'/>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
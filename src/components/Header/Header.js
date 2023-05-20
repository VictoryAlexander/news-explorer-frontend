import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ handleSignInClick, handleSignOutClick, handleNavClick, isLoggedIn }) {

  return (
    <header className="header">
      <div className="header__container">
        <Link to='/' className='header__logo'>NewsExplorer</Link>
        <Navigation 
          handleSignInClick={handleSignInClick}
          handleSignOutClick={handleSignOutClick}
          handleNavClick={handleNavClick}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </header>
  )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import './MobileMenuPopup.css';

function MobileMenuPopup({ onClose, onButtonClick, handleSignOutClick, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className='menu'>
        <div className="menu__wrapper">
          <div className="menu__header">
            <Link to='/' className="menu__logo">NewsExplorer</Link>
            <button
              type='button'
              className='menu__close'
              onClick={onClose}
            />
          </div>
          <Link to='/' className="menu__link" onClick={onClose}>Home</Link>
          <Link to='/saved-news' className="menu__link" onClick={onClose}>Saved articles</Link>
          <p className='menu__button menu__button_container'>
              Victor
              <button onClick={handleSignOutClick} className='menu__sign-out'/>
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className='menu'>
      <div className="menu__wrapper">
        <div className="menu__header">
          <Link to='/' className="menu__logo" onClick={onClose}>NewsExplorer</Link>
          <button
            type='button'
            className='menu__close'
            onClick={onClose}
          />
        </div>
        <Link to='/' className="menu__home" onClick={onClose}>Home</Link>
        <button type="button" className="menu__button" onClick={onButtonClick}>Sign in</button>
      </div>
    </div>
  )
}

export default MobileMenuPopup;
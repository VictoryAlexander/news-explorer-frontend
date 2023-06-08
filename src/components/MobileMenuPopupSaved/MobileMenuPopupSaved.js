import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './MobileMenuPopupSaved.css';
import CurrentUserContext from "../../contexts/CurrentUserContext";

function MobileMenuPopupSaved({ onClose, handleSignOutClick }) {
  const currentUser = useContext(CurrentUserContext);
  const username = currentUser.userInfo.name;

  return (
    <div className='menu'>
      <div className="menu__wrapper menu__wrapper_saved">
        <div className="menu__header">
          <Link to='/' className="menu__logo menu__logo_saved">NewsExplorer</Link>
          <button
            type='button'
            className='menu__close menu__close_saved'
            onClick={onClose}
          />
        </div>
        <Link to='/' className="menu__link menu__link_saved" onClick={onClose}>Home</Link>
        <Link to='/saved-news' className="menu__link menu__link_saved" onClick={onClose}>Saved articles</Link>
        <p className='menu__button menu__button_container menu__button_container_saved'>
          {username}
          <button onClick={handleSignOutClick} className='menu__sign-out menu__sign-out_saved'/>
        </p>
      </div>
    </div>
  )
}

export default MobileMenuPopupSaved;
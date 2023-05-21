import { useContext } from 'react';
import './SavedNewsNavigation.css';
import { Link } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsNavigation({ handleSignOutClick, handleNavClick }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        <li className='navigation__list'>
          <Link to='/' className='navigation__link  navigation__link_saved'>
            Home
          </Link>
        </li>
        <li className='navigation__list'>
          <Link to='/saved-news' className='navigation__link navigation__link_saved-articles'>
            Saved articles
          </Link>
        </li>
        <li>
          <p className='navigation__button navigation__button_container navigation__button_container_saved'>
            <span className='navigation__user-text'>{currentUser}</span>
            <button onClick={handleSignOutClick} className='navigation__sign-out navigation__sign-out_saved'/>
          </p>
        </li>
        <li>
          <button type='button' onClick={handleNavClick} className='navigation__mobile-button navigation__mobile-button_saved'/>
          </li>
      </ul>
    </nav>
  )
}

export default SavedNewsNavigation;
import { useContext } from 'react';
import './SavedNewsNavigation.css';
import { Link } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsNavigation({ handleSignOutClick }) {
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
            {currentUser}
            <button onClick={handleSignOutClick} className='navigation__sign-out navigation__sign-out_saved'/>
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default SavedNewsNavigation;
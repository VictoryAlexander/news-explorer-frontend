import './SavedNewsHeader.css';
import SavedNewsNavigation from '../SavedNewsNavigation/SavedNewsNavigation';
import { Link } from 'react-router-dom';

function SavedNewsHeader({ handleSignOutClick, handleNavClick }) {
  return(
    <header className="header header_saved">
      <div className="header__container">
        <Link to='/' className='header__logo header__logo_saved'>NewsExplorer</Link>
        <SavedNewsNavigation 
          handleSignOutClick={handleSignOutClick}
          handleNavClick={handleNavClick}
        />
      </div>
    </header>
  )
}

export default SavedNewsHeader;
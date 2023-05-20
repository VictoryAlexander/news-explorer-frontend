import { Link } from 'react-router-dom';
import './Footer.css';
import github from '../../images/Github Icon.svg';
import facebook from '../../images/facebook icon.svg';
import { year } from '../../utils/constants';
import openInNewTab from '../../utils/openInNewTab';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; {year} Supersite, Powered by News API</p>
      <ul className='footer__list'>
        <li className='footer__link-wrapper'>
          <Link to='/' className='footer__text'>Home</Link>
          <p className='footer__text' onClick={() => openInNewTab('https://practicum.com/')}>Practicum</p>
        </li>
        <li>
          <img src={github} alt='github icon' className='footer__icon' onClick={() => openInNewTab('https://github.com/')} />
          <img src={facebook} alt='facebook icon' className='footer__icon footer__icon_facebook' onClick={() => openInNewTab('https://www.facebook.com/PracticumUSA/')} />
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
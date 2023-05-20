import './LoginPopup.css';
import { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup({ handleSignIn, onClose, onButtonClick }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSignIn(email);
  }
  return (
    <PopupWithForm
      name='login'
      title='Sign in'
      onClose={onClose}
      buttonText='Sign in'
      onSubmit={handleSubmit}
      onButtonClick={onButtonClick}
      redirectButtonText='Sign up'
      redirectText='or'
    >
      <label className='logIn__label'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        className='logIn__input'
        placeholder='Enter email'
        required
        value={email}
        onChange={handleEmailChange}
      />
      <span className='login__error' id='email-error'></span>
      <label className='logIn__label'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        className='logIn__input'
        placeholder='Enter password'
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <span className='login__error' id='password-error'></span>
    </PopupWithForm>
  )
}

export default LoginPopup;
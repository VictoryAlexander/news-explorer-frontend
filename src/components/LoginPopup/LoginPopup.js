import './LoginPopup.css';
import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';

function LoginPopup({ handleSignIn, onClose, onButtonClick, errorMessage }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    handleSignIn(values.email, values.password);
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
      isValid={isValid}
      errorMessage={errorMessage}
    >
      <label className='popup__label'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        className='popup__input'
        placeholder='Enter email'
        required
        value={values.email || ''}
        onChange={handleChange}
      />
      <span className='popup__error' id='email-error'>{errors.email || ''}</span>
      <label className='popup__label'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        className='popup__input'
        placeholder='Enter password'
        required
        value={values.password || ''}
        onChange={handleChange}
      />
      <span className='popup__error' id='password-error'>{errors.password || ''}</span>
    </PopupWithForm>
  )
}

export default LoginPopup;
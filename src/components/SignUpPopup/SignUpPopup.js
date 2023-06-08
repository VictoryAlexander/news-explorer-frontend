import './SignUpPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';
import { useEffect } from 'react';

function SignUpPopup({ handleSignUp, onClose, onButtonClick, errorMessage }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    handleSignUp(values.email, values.password, values.username);
  }

  return (
    <PopupWithForm
      name='signup'
      title='Sign up'
      onClose={onClose}
      buttonText='Sign up'
      onSubmit={handleSubmit}
      onButtonClick={onButtonClick}
      redirectButtonText='Sign in'
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
        minLength={8}
        value={values.password || ''}
        onChange={handleChange}
      />
      <span className='popup__error' id='password-error'>{errors.password || ''}</span>
      <label className='popup__label'>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        className='popup__input'
        placeholder='Enter your username'
        required
        value={values.username || ''}
        onChange={handleChange}
      />
      <span className='popup__error' id='password-error'>{errors.username || ''}</span>
    </PopupWithForm>
  )
}

export default SignUpPopup;
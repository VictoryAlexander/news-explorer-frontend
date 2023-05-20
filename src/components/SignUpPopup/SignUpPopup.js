import './SignUpPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpPopup({ handleSignUp, onClose, onButtonClick }) {

  function handleSubmit(e) {
    e.preventDefault();
    handleSignUp();
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
    >
      <label className='logIn__label'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        className='logIn__input'
        placeholder='Enter email'
        required
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
      />
      <span className='login__error' id='password-error'></span>
      <label className='logIn__label'>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        className='logIn__input'
        placeholder='Enter your username'
        required
      />
      <span className='login__error' id='password-error'></span>
    </PopupWithForm>
  )
}

export default SignUpPopup;
import './RegisterCompletePopup.css';

function RegisterCompletePopup({ onClose, onButtonClick }) {
  return (
    <div className='popup' onClick={onClose}>
      <button
        type='button'
        className='popup__close-button'
        onClick={onClose}
      />
      <form className='popup__form' onClick={e => e.stopPropagation()}>
        <h3 className='popup__title popup__title_completed'>Registration successfully completed!</h3>
        <p className='popup__redirect-button popup__redirect-button_completed' onClick={onButtonClick}>Sign in</p>
      </form>
    </div>
  )
}

export default RegisterCompletePopup;
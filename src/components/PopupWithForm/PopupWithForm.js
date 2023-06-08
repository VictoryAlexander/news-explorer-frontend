import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({ name, title, onClose, buttonText, onSubmit, onButtonClick, redirectButtonText, redirectText, isValid, errorMessage, children }) {

  const redirectTextClassName = `popup__redirect-text ${redirectText.length > 0 ? 'popup__redirect-text_visible' : 'popup__redirect-text_hidden'}`;
  const redirectButtonClassName = `popup__redirect-button ${redirectButtonText.length > 0 ? 'popup__redirect-button_visible' : 'popup__redirect-button_hidden'}`;
  const popupSubmitButtonClassName = `popup__submit-button ${!isValid ? 'popup__submit-button_disabled' : ''}`;

  return (
    <div className='popup' onClick={onClose}>
      <button
        type='button'
        className='popup__close-button'
        onClick={onClose}
      />
      <form className='popup__form' name={name} onSubmit={onSubmit} onClick={e => e.stopPropagation()}>
        <div className='popup__form-container'>
          <h3 className='popup__title'>{title}</h3>
        </div>
        {children}
        <div className='popup__button-container'>
          <span className='popup__error popup__error_response'>{errorMessage || ''}</span>
          <button type='submit' className={popupSubmitButtonClassName}>{buttonText}</button>
          <div className='popup__redirect-container'>
            <p className={redirectTextClassName}>{redirectText}&nbsp;</p>
            <p className={redirectButtonClassName} onClick={onButtonClick}>{redirectButtonText}</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PopupWithForm;
import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ handleNewsSearch }) {
  const [keyWord, setkeyWord] = useState('');

  function handlekeyWordChange(e) {
    setkeyWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleNewsSearch(keyWord);
  }

  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <h2 className='search-form__title'>What's going on in the world?</h2>
        <p className='search-form__description'>Find the latest news on any topic and save them in your personal account.</p>
        <fieldset className='search-form__fieldset'>
          <input 
            type='search'
            name='search'
            id='search'
            className='search-form__input' 
            placeholder='Enter topic'
            required
            value={keyWord}
            onChange={handlekeyWordChange}
            />
          <button type='submit' className='search-form__button'>Search</button>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;
import React from 'react';

function SearchForm(props) {
  const [description, setDescription] = React.useState('');

  function handleSearchInput(evt) {
    setDescription(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.resetCards();
    props.onGetServerCards(description);
  }
  return (
    <section className="cover">
      <div className="cover__image"></div>
      <form className="cover__search">
        <h2 className="cover-title">Что творится в мире?</h2>
        <p className="cover-subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём&nbsp;личном кабинете.</p>
        <div className="input__container">
          <input type="text" required placeholder="Введите тему новости" className="input__text" onChange={handleSearchInput} />
          <button type="button" className="search__button" aria-label="поиск" onClick={handleSubmit}>Искать</button>
        </div>
        {(props.searchError && <div className="search__mistake">{props.searchError}</div>)}
      </form>
    </section>
  )
}

export default SearchForm;

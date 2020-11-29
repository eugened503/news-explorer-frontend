import React from 'react';
import { useLocation } from 'react-router-dom';

function NewsCard(props) {
  const { pathname } = useLocation();
  const classText = `${pathname === '/' ? '' : 'card__button-trash'}`;
  const classButtonSave = `${props.isMenu && pathname === '/' ? 'card__button-save' : ''}`;

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    if (!props.isMenu && e.target.classList.contains('card__button-save-login')) {
      props.onAddPlace({
        keyword: props.keywords[0],
        title: props.title,
        text: props.paragraph,
        date: props.date,
        source: props.edition,
        link: props.url,
        image: props.image
      })
    }

    if (e.target.classList.contains('card__like-button_marker')) {
      let result = props.saveCards.filter(function (obj) { //получаем статью по заголовку 
        return obj.title == props.card.title;
      });
      let resultElement = result.slice(0, 1)[0]; //вытаскиваем объект статьи из массива
      props.handleCardDelete(resultElement); //удаляем статью из сохраненных по нажатию на иконку с синей заливкой
    }
    if (e.target.classList.contains('card__button-trash')) {
      props.handleCardDelete(props.saveCards);
    }
  }

  return (
    <article className="card">
      <img className="card__image" alt="фото" src={props.image}/>
      <h2 className="card__date">{props.date}</h2>
      <h2 className="card__title">{props.title}</h2>
      <p className="card__paragraph">{props.paragraph}</p>
      <h2 className="card__edition">{props.edition}</h2>
      <button type="button"
        aria-label="сохранить или удалить статью"
        className={`card__button ${classButtonSave}
     ${props.card != undefined ? ((!Object.values(props.saveCards).some((i) => i.title === props.card.title))
            ? 'card__button-save-login'
            : 'card__like-button_marker') : ''}
     ${classText}`}
        onClick={handleAddPlaceSubmit}/>
      {props.children}
    </article>
  )
}

export default NewsCard;

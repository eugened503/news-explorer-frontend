import React from 'react';
import { useLocation } from 'react-router-dom';

  function NewsCard(props){ 
    const { pathname } = useLocation();
    const classText = `${pathname === '/' ? 'card__button-save' : 'card__button-trash'}`;
    return (
        <article className="card">
            <img className="card__image" alt="фото" src={props.image}/>
            <h2 className="card__date">{props.date}</h2>
  <h2 className="card__title">{props.title}</h2>
  <p className="card__paragraph">{props.paragraph}</p>
  <h2 className="card__edition">{props.edition}</h2>
   <button type="button" aria-label="сохранить или удалить статью" className={`card__button ${classText}`}></button>
{props.children}
        </article>
    )
  }

  export default NewsCard;

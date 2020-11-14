import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {

  const { pathname } = useLocation();
  const classMenuCloseBtn = `${!props.isMenuCloseBtn ? 'menu__item_visible' : ''}`
  const classIconMobile = `${pathname === '/saved-news' ? 'menu__icon-mobile-black' : ''}`;
  const classText = `${pathname === '/saved-news' ? 'menu__item-color' : ''}`;
  const classTextbutton = `${pathname === '/saved-news' ? 'menu__button-save' : 'menu__button-nav'}`;
  const classTextDecoration = `${pathname === '/saved-news' ? 'menu__text-decoration-save' : ''}`;

  return (
    <div className='menu menu_margin'>
      <div className={`menu__icon-mobile ${classMenuCloseBtn} ${classIconMobile}`} onClick={props.openMenuMobile}></div>
      <Link to="/" className={`menu__item menu__text-decoration menu__item_margin menu__item-mobile ${classText}`}>Главная</Link>

      {!props.isMenu || pathname === '/saved-news'
        ? (
          <>
            <Link to="/saved-news" className={`menu__item menu__item_color ${classTextDecoration} ${classText}`}>Сохранённые статьи</Link>
            <Link to="/" type="button" className={`menu__item menu__button menu__button_width menu__button-save_margin menu__button-top
            ${classTextbutton}`} aria-label="Выйти" onClick={props.onLogin}>Грета</Link >
          </>
        )
        : (
          <button type="button" className={`menu__item menu__button menu__button-auth_width menu__button_margin menu__item-mobile `} aria-label="Авторизоваться" onClick={props.onSignOut}>Авторизоваться</button>
        )
      }
    </div>)
}

export default Navigation









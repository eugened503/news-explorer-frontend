import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {
  const { pathname } = useLocation();
  const classMenuCloseBtn = `${!props.isMenuCloseBtn ? 'menu__item_visible' : ''}`
  const classIconMobile = `${pathname === '/saved-news' ? 'menu__icon-mobile-black' : ''}`;
  const classTextColor = `${pathname === '/saved-news' ? 'menu__item-color' : ''}`;
  const classTextButton = `${pathname === '/saved-news' ? 'menu__button-save' : 'menu__button-nav'}`;
  const classTextDecoration = `${pathname === '/saved-news' ? 'menu__text-decoration-save' : ''}`;

  return (
    <div className='menu menu_margin'>
      <div className={`menu__icon-mobile ${classMenuCloseBtn} ${classIconMobile}`} onClick={props.openMenuMobile}></div>
      <Link to="/" className={`menu__item menu__text-decoration menu__item_margin menu__item-mobile ${classTextColor}`}>Главная</Link>
      {!props.isMenu || pathname === '/saved-news'
        ? (
          <>
            <Link to="/saved-news" className={`menu__item menu__item_color ${classTextDecoration} ${classTextColor}`}>Сохранённые статьи</Link>
            <Link to="/" className={`menu__item menu__button menu__button_width menu__button-save_margin menu__button-top
            ${classTextButton}`} aria-label="Выйти" onClick={props.leavePage}>{props.userData.name}</Link >
          </>
        )
        : (
          <button type="button" className={`menu__item menu__button menu__button-auth_width menu__button_margin menu__item-mobile `} aria-label="Авторизоваться" onClick={props.onLogin}>Авторизоваться</button>
        )
      }
    </div>)
}

export default Navigation









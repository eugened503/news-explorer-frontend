import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function PopupWithMenu(props) {

  const { pathname } = useLocation();

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="" container="menu__form" close="menu__form_close" width={'popup_close-menu'} classTitle="menu__title">
      <Link to="/" className="header__explorer menu__mobile-header">NewsExplorer</Link>
      <div className="menu__mobile-header-bottom"></div>
      <div className="menu__mobile-container">
        <Link to="/" className="menu__item_margin menu__mobile-item" onClick={props.onClose}>Главная</Link>
        {!props.isMenu || pathname === '/saved-news'
          ? (
            <>
              <Link to="/saved-news" className="menu__mobile-item menu__mobile-item_top" onClick={props.onClose}>Сохранённые статьи</Link>
              <button type="button" className="menu__button menu__button-mobile menu__button-nav" aria-label="Выйти" onClick={props.onEditReg}>Грета</button>

            </>
          )
          : (
            <button type="button" className="menu__button menu__button-mobile" aria-label="Авторизоваться" onClick={props.onEditReg}>Авторизоваться</button>
          )
        }
      </div>
    </PopupWithForm>
  )
}

export default PopupWithMenu



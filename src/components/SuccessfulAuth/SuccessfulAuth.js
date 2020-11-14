import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { Link } from 'react-router-dom';

function SuccessfulAuth(props) {

    return (
      <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} title="" container="success" close="success__button">
          <div className="success__form"> 
        <h3 className="success__title">Пользователь успешно зарегистрирован!</h3>
          <Link className="signup__link signup__link_color success__link" to="/" onClick={props.onEditLogin}>Войти</Link>
        </div>
       
      </PopupWithForm>)
  }
  
  export default SuccessfulAuth;
  
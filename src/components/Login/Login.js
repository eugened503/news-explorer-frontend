import React, { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { Link } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formValid, setFormValid] = useState(false)
  const classText = `${formValid === false ? 'login__button_disabled' : ''}`;

  useEffect(() => {
    if (!props.isOpen) {
      setEmail('')
      setPassword('')
      setPasswordError('')
      setEmailError('')
    }
  })

  useEffect(() => {
    if (emailError || passwordError || email === "" || password === "") {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  })

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /[\w-]+@[\w-]+\.[A-Za-z]{2,5}/
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Неправильный формат email')
      if (!e.target.value) {
        setEmailError('Поле email не заполнено!')
      }
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3) {
      setPasswordError('Минимальная длина пароля - 3 символа')
      if (!e.target.value) {
        setPasswordError('Поле пароля не заполнено!')
      }
    }
    else {
      setPasswordError('')
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.openLogin(email, password);
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="register" title="Вход" container="popup__container_reg" classTitle="popup__title_margin">
      <div className="login__form login__form_open">
        <label htmlFor="Email">Email</label>
        <input className="login__field login__field_color login__label-margin_bottom" id="email" name="email" type="email" value={email}
          onChange={e => emailHandler(e)} required placeholder="Введите почту" />
        {(emailError && <div className="login__mistake-email">{emailError}</div>)}
        <label className="login__label-margin" htmlFor="password">Пароль</label>
        <input className="login__field login__field_margin login__field_color"
          id="password" name="password" type="password" value={password}
          required placeholder="Введите пароль" onChange={e => passwordHandler(e)} />
        {(passwordError && <div className="login__mistake-password">{passwordError}</div>)}
        <span className="login__field-error_top">{props.loginError}</span>
        <div className="login__button-container">
          <button disabled={!formValid} type="submit" className={`login__button ${classText}`}>Войти</button>
          <div className="login__signup">
            <p className="signup__link">или</p>
            <Link className="signup__link signup__link_color" to="/" onClick={props.onEditReg}>Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </PopupWithForm>)
}

export default Login;

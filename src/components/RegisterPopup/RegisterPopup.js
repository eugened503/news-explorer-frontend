import React, { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { Link } from 'react-router-dom';

function RegisterPopup(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formValid, setFormValid] = useState(false)
  const classText = `${formValid === false ? 'login__button_disabled' : ''}`;

  useEffect(() => {
    if (!props.isOpen) {
      setEmail('')
      setPassword('')
      setName('')
      setPasswordError('')
      setEmailError('')
      setNameError('')
    }
  })

  useEffect(() => {
    if (emailError || passwordError || nameError || email === "" || password === "" || name === "") {
      setFormValid(false)
    }
    else {
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

  const nameHandler = (e) => {
    setName(e.target.value)
    if (e.target.value.length < 3) {
      setNameError('Минимальная длина имени - 3 символа')
      if (!e.target.value) {
        setNameError('Поле для имени не заполнено!')
      }
    }
    else {
      setNameError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(email, password, name);
  }

  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} title="Регистрация" container="popup__container_reg" classTitle="popup__title_margin">
      <div onSubmit={handleSubmit} className="login__form login__form_height">
        <label htmlFor="Email">Email</label>
        <input className="login__field login__field_color login__label-margin_bottom" id="email" name="email" type="email" value={email}
          onChange={e => emailHandler(e)} required placeholder="Введите почту"/>
        {(emailError && <div className="regist__mistake-email">{emailError}</div>)}
        <span className="login__field-error">{props.registrationError}</span>
        <label className="login__label-margin" htmlFor="password">Пароль</label>
        <input className="login__field login__field_margin login__field_color"
          id="password" name="password" type="password" value={password}
          required placeholder="Введите пароль" onChange={e => passwordHandler(e)} />
        {(passwordError && <div className="regist__mistake-password">{passwordError}</div>)}
        <label htmlFor="name">Имя</label>
        <input className="login__field login__field_margin login__field_color" id="name" name="name" type="text" value={name} onChange={e => nameHandler(e)} required placeholder="Введите своё имя" />
        {(nameError && <div className="regist__mistake-name">{nameError}</div>)}
        <div className="login__button-container">
          <button disabled={!formValid} type="submit" onClick={handleSubmit} className={` login__button ${classText}`}>Зарегистрироваться</button>
          <div className="login__signup">
            <p className="signup__link">или</p>
            <Link className="signup__link signup__link_color" to="/" onClick={props.onEditLogin}>Войти</Link>
          </div>
        </div>
      </div>
    </PopupWithForm>)
}

export default RegisterPopup;

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&#169; 2020 Supersite, Powered by News API</p>
      <div className="footer__links">
        <ul className="footer__list">
          <li><Link to="/" className="footer__item footer__margin-main">Главная</Link></li>
          <li><a href="https://praktikum.yandex.ru" className="footer__item footer__margin-second">Яндекс.Практикум</a></li>
        </ul>
        <ul className="social-icons">
          <li><a href="https://github.com" className="menu__github"></a></li>
          <li><a href="https://ru-ru.facebook.com" className="menu__facebook"></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;

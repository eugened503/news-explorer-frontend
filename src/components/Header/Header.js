import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';

function Header(props) {
  const { pathname } = useLocation();
  const classText = `${pathname === '/saved-news' ? 'menu__item-color' : ''}`;

  function signOut() {
    props.onEditReg();
  }

  return (
    <header className="header">
      <Link to="/" className={`header__explorer ${classText}`}>NewsExplorer</Link>
      <Navigation
        openMenuMobile={props.onOpenMenuMobile}
        isMenu={props.isMenu}
        onSignOut={signOut}
        onLogin={props.onEditLogin}
        isMenuCloseBtn={props.isMenuCloseBtn}
      />
    </header>
  )
}

export default Header;





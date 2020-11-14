
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
import Footer from '../Footer/Footer.js';
import SuccessfulAuth from '../SuccessfulAuth/SuccessfulAuth.js';
import RegisterPopup from '../RegisterPopup/RegisterPopup'
import PopupWithMenu from '../PopupWithMenu/PopupWithMenu'
import Login from '../Login/Login.js';

function App() {

  const [isMenu, setMenu] = React.useState(true);
  const [isMenuCloseBtn, setMenuCloseBtn] = React.useState(true);
  const [isRegisterPopup, setIsRegisterPopup] = React.useState(false);
  const [isEditSuccess, setEditSuccess] = React.useState(false);
  const [isEditLogin, setIsEditEditLogin] = React.useState(false);
  const [isMenuMobile, setMenuMobile] = React.useState(false);

  function openMenuMobile() {
    setMenuMobile(true);
  }

  function openSuccess() {
    setEditSuccess(true)
    setIsRegisterPopup(false)
  }

  function handleRegister(email, password, name) {
    openSuccess();
  }

  function editReg() { 
    setIsRegisterPopup(true);
     setMenuMobile(false);
     setMenuCloseBtn(false);
  }

  function closeAllPopups() {  
    setIsRegisterPopup(false);
    setIsEditEditLogin(false);
    setEditSuccess(false);
    setMenuMobile(false);
    setMenuCloseBtn(true);
  }

  function openLogin() {
    setIsRegisterPopup(false);
    setIsEditEditLogin(true);
    setEditSuccess(false);
    setMenu(true);
  }

  function openReg() {
    setIsRegisterPopup(true);
    setIsEditEditLogin(false);
  }

  function goSite() {
    setMenu(false);
    setIsEditEditLogin(false);
    setMenuCloseBtn(true);
  }

  React.useEffect(() => { 
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    });
  }, []);

  return (
    <div className="app">

      <Header
        onOpenMenuMobile={openMenuMobile}
        isMenu={isMenu}
        onEditReg={editReg}
        onEditLogin={openLogin}
        isMenuCloseBtn={isMenuCloseBtn}
      />

     <Route exact path="/">
        <Main />
      </Route>
      
      <Route exact path="/saved-news">
        <SavedNews />
      </Route>

      <PopupWithMenu isOpen={isMenuMobile} onClose={closeAllPopups} onEditReg={editReg}  isMenu={isMenu}/>
      <RegisterPopup onRegister={handleRegister} onEditLogin={openLogin} isOpen={isRegisterPopup} onClose={closeAllPopups} />
      <SuccessfulAuth isOpen={isEditSuccess} onClose={closeAllPopups} onEditLogin={openLogin} />
      <Login isOpen={isEditLogin} onClose={closeAllPopups} openLogin={goSite} onEditReg={openReg} />


      <Footer /> 
    </div>
  );
}

export default App;

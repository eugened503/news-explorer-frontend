
import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
import Footer from '../Footer/Footer.js';
import SuccessfulAuth from '../SuccessfulAuth/SuccessfulAuth.js';
import RegisterPopup from '../RegisterPopup/RegisterPopup'
import PopupWithMenu from '../PopupWithMenu/PopupWithMenu'
import Login from '../Login/Login.js';
import api from '../../utils/NewsApi';
import * as auth from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import dateFormatter from '../../utils/DateFormat';

function App() {
  //перменные для вычисления даты
  const today = new Date();
  const articlesAgeFrom = dateFormatter.setArticleAge(today, 7);
  const articlesAgeTo = dateFormatter.requestDate(today);

  //поп-апы
  const [isRegisterPopup, setIsRegisterPopup] = React.useState(false);
  const [isEditSuccess, setEditSuccess] = React.useState(false);
  const [isEditLogin, setIsEditLogin] = React.useState(false);
  const [isMenuMobile, setMenuMobile] = React.useState(false);

  const [isMenuCloseBtn, setMenuCloseBtn] = React.useState(true); //кнопка мобильного меню
  const [isSpinner, setIsSpinner] = React.useState(''); //загрузка спинера
  const [isNoResults, setNoResults] = React.useState(''); //загрузка сообщения "ничего не найдено"
  const [isNoServer, setNoServer] = React.useState(''); //загрузка сообщения "Во время запроса произошла ошибка"

  //крточки (статьи)
  const [cards, setCards] = React.useState([]); //стейт с массивом несохраненных статей
  const [saveCards, setSaveCards] = React.useState([]); //стейт с массивом сохраненных статей
  const [isMenu, setMenu] = React.useState(true); //стейт авторизации (аналог loggedIn)
  const [isCardSearch, setCardSearch] = React.useState(false); //сброс карточек перед новым поиском
  const [userData, setUserData] = React.useState({}); // id, email, name пользователя (аналог currentUser)
  const [keywords, setKeywords] = React.useState([]); //стейт с массивом ключевых слов
  const [numberСards, setNumberСards] = React.useState(3); // стейт для количества карточек при загрузке

  //хуки с сообщениями об ошибках запроса
  const [searchError, setSearchError] = React.useState(''); //ошибка при пустом запросе
  const [registrationError, setRegistrationError] = React.useState(''); //ошибка регистации
  const [loginError, setLoginError] = React.useState(''); //ошибка авторизации

  const history = useHistory();
  const jwt = localStorage.getItem('jwt'); //токен юзера

  console.log(isMenu)

  function renderLoading(isLoading) {
    if (isLoading) {
      setIsSpinner('body-preloader_block');
    } else {
      setIsSpinner('');
    }
  }

  function openMenuMobile() {
    setMenuMobile(true);
  }

  function openSuccess() {
    setEditSuccess(true)
    setIsRegisterPopup(false)
  }

  function editReg() {
    setIsRegisterPopup(true);
    setMenuMobile(false);
    setMenuCloseBtn(false);
  }

  function closeAllPopups() {
    setIsRegisterPopup(false);
    setIsEditLogin(false);
    setEditSuccess(false);
    setMenuMobile(false);
    setMenuCloseBtn(true);
    setRegistrationError('') //сбрасываем ошибку регистрации
    setLoginError('') //сбрасываем ошибку авторизации
  }

  function openLogin() {
    setIsRegisterPopup(false);
    setIsEditLogin(true);
    setEditSuccess(false);
    setMenu(true);
  }

  function openReg() {
    setIsRegisterPopup(true);
    setIsEditLogin(false);
  }

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    });
  }, []);

  function getServerCards(keyword) {
    if (keyword === '') {
      setSearchError('Нужно ввести ключевое слово') //валидируем поле запроса
    }
    else {
      setCardSearch(true); //сбрасываем карточки перед поиском
      setNoResults('') // сбрасываем сообщение о неудачном запросе
      setNoServer('') // сбрасываем сообщение об ошибке сервера
      renderLoading(true);
      setSearchError('')
      api.getNews(keyword, articlesAgeFrom, articlesAgeTo)
        .then((res) => {
          if (res.articles.length === 0) {
            setNoResults('no-results_block')
          }
          else {
            setCardSearch(false);
            setKeywords([keyword, ...keywords]); //добавляем в массив ключевых слов
            localStorage.setItem('cards', JSON.stringify(res.articles));
            setCards(JSON.parse(localStorage.getItem('cards')))
          }
        })
        .catch((err) => {
          console.log(err);
          setNoServer('no-results_block')
        })
        .finally(() => {
          renderLoading(false);
        });
    }
  }

  function handleRegister(email, password, name) {
    auth.register(email, password, name).then((res) => {
      if (res) {
        openSuccess();
        history.push('/');
      } else {
        setRegistrationError('Что-то пошло не так');
        console.log('Что-то пошло не так');
      }
    })
      .catch(err => console.log(err));
  }

  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (!data) {
          setLoginError('Что-то пошло не так');
          setLoginError(data.message);
          return console.log('Что-то пошло не так');
        }
        if (data) {
          setMenu(false);
          setIsEditLogin(false);
          setMenuCloseBtn(true);
          history.push('/'); // переадресуем пользователя
          return;
        }
      })
      .catch(err => console.log(err)); // запускается, если пользователь не найден 
  }

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setUserData({
              _id: res._id,
              name: res.name,
              email: res.email,
            })
            setMenu(false);
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, [!isMenu])

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('cards')) != null) {
      setCards(JSON.parse(localStorage.getItem('cards'))); //загружаем несохраненные статьи
    }
  }, [])

  function leavePage() {
    setMenu(true);
    setUserData('');
    localStorage.removeItem('jwt');
    localStorage.removeItem('cards')
    history.push('/');
  }

  function handleAddPlace(data) { // добавление новой статьи
    auth.sendCard(data, jwt)
      .then((newCard) => {
        setSaveCards([newCard.data, ...saveCards]); //добавление новой статьи в массив сохраненных статей
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    if (!isMenu) {
      auth.getCards(jwt) //получаем статьи с сервера
        .then((arr) => {
          setSaveCards(arr);
        })
        .catch(err => console.log(err));
    }
  }, [!isMenu]);


  function handleCardDelete(card) { //удаление карточки с сервера
    auth.deleteCard(jwt, `/${card._id}`)
      .then(() => {
        const newCards = saveCards.filter((item) => item._id !== card._id);
        setSaveCards(newCards); //обновление стейта
      })
      .catch(err => console.log(err));
  }

  function openThreeCards() { //открываем 3 карточки 
    setNumberСards(numberСards + 3);
  }

  function resetCards() { //сбрасываем число карточек при новом запросе
    setNumberСards(3);
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={userData}>
        <Header
          onOpenMenuMobile={openMenuMobile}
          isMenu={isMenu}
          onEditReg={editReg}
          onEditLogin={openLogin}
          isMenuCloseBtn={isMenuCloseBtn}
          userData={userData}
          leavePage={leavePage}
        />
        <Switch>
          <Route exact path="/">
            <Main onGetServerCards={getServerCards}
              isSpinner={isSpinner}
              cards={cards}
              isNoResults={isNoResults}
              isCardSearch={isCardSearch}
              onAddPlace={handleAddPlace}
              keywords={keywords}
              isMenu={isMenu}
              numberСards={numberСards}
              openThreeCards={openThreeCards}
              resetCards={resetCards}
              saveCards={saveCards}
              handleCardDelete={handleCardDelete}
              searchError={searchError}
              isNoServer={isNoServer}
            />
          </Route>
          <ProtectedRoute exact path="/saved-news"
            component={SavedNews}
            isMenu={isMenu}
            saveCards={saveCards}
            keywords={keywords}
            userData={userData}
            handleCardDelete={handleCardDelete}
          />
        </Switch>
        <PopupWithMenu isOpen={isMenuMobile} onClose={closeAllPopups}
          onEditLogin={openLogin} isMenu={isMenu} leavePage={leavePage} userData={userData} />
        <RegisterPopup registrationError={registrationError} onRegister={handleRegister} onEditLogin={openLogin} isOpen={isRegisterPopup} onClose={closeAllPopups} />
        <SuccessfulAuth isOpen={isEditSuccess} onClose={closeAllPopups} onEditLogin={openLogin} />
        <Login loginError={loginError} isOpen={isEditLogin} onClose={closeAllPopups} openLogin={handleLogin} onEditReg={openReg} />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

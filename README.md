# Фронтенд-часть дипломного проекта News Explorer для Яндекс.Практикума

## Описание проекта 
Проект выполнен на  **React** и является сервисом по поиску новостей. Введя в поисковую строку ключевое слово, пользователь получает новости, которые потом может сохранять (если зарегистрируется).
Проект состоит из двух страниц: главной страницы и страницы «сохраненные статьи» для зарегистрированного пользователя.
На странице «сохраненные статьи» пользователь может увидеть: сохраненные статьи, количество статьей, теги (ключевые слова, по которым искалась статья).

## Развертывание проекта
- Скопируйте репозиторий
    - `git clone https://github.com/eugened503/news-explorer-api.git`
- Установите пакеты npm
     - `npm install`
- Запустите версию для разработки (ее можно увидеть на локальном сервере)
    - `npm start`
- Запустите сборку статической версии
     - `npm run build`

## Функциональные возможности

#### Главная страница
+ Попап регистрации пользователя
+ Попап авторизации пользователя
+ Поля попапов валидированы
+ Поле ввода запроса новостей валидировано
+ Настроен прелоудер и поле «ничего не найдено»
+ Шапка проекта имеет 2 состояния: для авторизированных и неавторизированных пользователей
+ Присутствует «кнопка показать еще», которая добавляет 3 статьи при нажатии
+ Если пользователь зарегистрирован, то он может сохранять статьи. Для неавторизированного пользователя вплывает сообщение о необходимости авторизации
+ Пoсле перезагрузки страницы статьи не исчезают (они хранятся в LocalStorage)
Если пользователь зарегистрирован, то ему не нужно вновь вводить свои данные, откроется страница с шапкой авторизированного пользователя

#### Страница «сохраненные статьи»
+ Если неавторизированный пользователь попытается пройти на страницу с сохраненными статьями, то произойдет переход на главную страницу
+ Показано количество сохраненных статей
+ Перечислены в порядке убывания ключевые слова, по которым велся поиск статей
+ Показаны сохраненные карточки, которые можно удалять

## Ссылка на GitHub Pages
* [Нажмите, чтобы увидеть проект](https://eugened503.github.io/news-explorer-frontend/#/)

## Дополнительная информация
* [Бэкенда-часть дипломного проекта](https://github.com/eugened503/news-explorer-api)
* [Макет проекта](https://www.figma.com/file/Dhl21eRzzbFMBe0DU9SglF/Diploma-WEB-v2.0-(for-students)?node-id=6%3A116)
* [сервис NewsApi](https://newsapi.org/)


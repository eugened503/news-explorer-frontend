import React from 'react';

function ServerNotAvailable(props) {
  return (
    <section className={`no-results ${props.isNoServer}`}>
      <div className="no-results__elements">
        <div className="no-results__img"></div>
        <h2 className="no-results__header">Во время запроса произошла ошибка.</h2>
        <p className="no-results__paragraph"> Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
      </div>
    </section>
  )
}

export default ServerNotAvailable;
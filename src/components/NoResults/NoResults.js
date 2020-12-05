import React from 'react';

function NoResults(props) {
  return (
    <section className={`no-results ${props.isNoResults}`}>
      <div className="no-results__elements">
        <div className="no-results__img"></div>
        <h2 className="no-results__header">Ничего не найдено</h2>
        <p className="no-results__paragraph">К сожалению по вашему запросу
ничего не найдено.</p>
      </div>
    </section>
  )
}

export default NoResults;
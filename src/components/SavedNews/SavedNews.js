import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import national from '../../images/national.jpg';
import forest_lights from '../../images/forest_lights.jpg';
import taiga_two from '../../images/taiga-two.jpg';

function SavedNews() {

  return (
    <section className="new-cards new-cards__item">
      <SavedNewsHeader />
      <div className="cards__search cards__padding-top cards__save">
        <div className="cards cards__margin-top ">

          <NewsCard
            image={national}
            date={'2 августа, 2019'}
            title={'Национальное достояние – парки'}
            paragraph={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
            edition={'ЛЕНТА.РУ'}
          >
            <div className="card__hashtag">Природа</div>
          </NewsCard>

          <NewsCard
            image={forest_lights}
            date={'2 августа, 2019'}
            title={'Лесные огоньки: история одной фотографии'}
            paragraph={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
            edition={'АФИША'}
          >
            <div className="card__hashtag">Природа</div>
          </NewsCard>

          <NewsCard
            image={taiga_two}
            date={'2 августа, 2019'}
            title={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'}
            paragraph={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'}
            edition={'ЛЕНТА.РУ'}
          >
            <div className="card__hashtag">Тайга</div>
          </NewsCard>

          <NewsCard
            image={national}
            date={'2 августа, 2019'}
            title={'Национальное достояние – парки'}
            paragraph={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
            edition={'ЛЕНТА.РУ'}
          >
            <div className="card__hashtag">Природа</div>
          </NewsCard>

          <NewsCard
            image={forest_lights}
            date={'2 августа, 2019'}
            title={'Лесные огоньки: история одной фотографии'}
            paragraph={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
            edition={'АФИША'}
          >
            <div className="card__hashtag">Природа</div>
          </NewsCard>
        </div>
      </div>
    </section>
  )
}

export default SavedNews
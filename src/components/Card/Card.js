import React from 'react';

import image_park from '../../images/image_park.jpg';
import image_forest from '../../images/image_forest-lights.jpg';
import image_taiga from '../../images/taiga.jpg';
import NewsCard from '../NewsCard/NewsCard.js';

function Card() {

  return (
  
<section className="cards__search card__padding">
       <h2 className="card__resault">Результаты поиска</h2> 
       <div className="cards">
     <NewsCard
      image={image_park}
      date={'2 августа, 2019'}
      title={'Национальное достояние – парки'}
      paragraph={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
      edition={'ЛЕНТА.РУ'}
      >
    </NewsCard>
    <NewsCard
      image={image_forest}
      date={'2 августа, 2019'}
      title={'Лесные огоньки: история одной фотографии'}
      paragraph={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
      edition={'МЕДУЗА'}
      >
    </NewsCard>
    <NewsCard
      image={image_taiga}
      date={'2 августа, 2019'}
      title={'«Первозданная тайга»:  новый фотопроект Игоря Шпиленка'}
      paragraph={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'}
      edition={'РИА'}
      >
    </NewsCard>
    </div>
  <button type="button"  aria-label="показать еще" className="cards__button">Показать еще</button>
  </section> 
  )
}

export default  Card;


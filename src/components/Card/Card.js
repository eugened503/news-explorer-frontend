import React from 'react';
import dateFormatter from '../../utils/DateFormat';
import NewsCard from '../NewsCard/NewsCard.js';

function Card(props) {

  const textButton = `${props.cards.length <= props.numberСards ? 'card__button-invisible' : ''}`;
  const textResault = `${props.cards.length < 1 ? 'card__button-invisible' : 'card__resault'}`;
  const textSearch = `${props.cards.length < 1 || props.isCardSearch ? 'cards__search_none' : 'cards__search'}`;

  return (
    <section className={`${textSearch} card__padding`}>
      <h2 className={`${textResault}`}>Результаты поиска</h2>
      <div className="cards">
        {props.cards.slice(0, props.numberСards).map((item, index) => {
          if (props.cards.lenght != 0) {
            return (
              <NewsCard
                card={item}
                key={index}
                image={item.urlToImage}
                title={item.title}
                date={dateFormatter.articleDateFormatter(new Date(item.publishedAt))}
                paragraph={item.description}
                edition={item.source.name}
                onAddPlace={props.onAddPlace}
                keywords={props.keywords}
                url={item.url}
                isMenu={props.isMenu}
                cards={props.card}
                saveCards={props.saveCards}
                handleCardDelete={props.handleCardDelete}
              />
            )
          }
        })}
      </div>
      <button type="button" aria-label="показать еще" className={`${textButton} cards__button `} onClick={props.openAllCards}>Показать еще</button>
    </section>
  )
}

export default Card;


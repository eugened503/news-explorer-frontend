import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';


function SavedNews(props) {
  return (
    <section className="new-cards new-cards__item">
      <SavedNewsHeader  saveCards={props.saveCards}  keywords={props.keywords} userData={props.userData}/>
      <div className="cards__search cards__padding-top cards__save">
        <div className="cards cards__margin-top ">
        {props.saveCards.map((item) => {
          return (
            <NewsCard
            saveCards={item}
            key={item._id}
            image={item.image}
            title={item.title}
            date={item.date}
            paragraph={item.text}
            edition={item.source}
            handleCardDelete={props.handleCardDelete}
           saveServer={props.saveCards}
            >
  <div className="card__hashtag">{item.keyword}</div>
       </NewsCard>
          );
        })} 
        </div>
      </div>
    </section>
  )
}

export default SavedNews
import React from 'react';


  function SavedNewsHeader(){ 

    return (
      <section className="saved-news">
           <h3 className="saved-news__info">Сохранённые статьи</h3> 
       <h2 className="saved-news__lead">Грета, у вас 5 сохранённых статей</h2> 
       <h3 className="saved-news__hashtag">По ключевым словам: 
<strong> Природа, Тайга</strong> и <strong>2-м другим</strong></h3> 
    </section>

    )
  }

  export default SavedNewsHeader
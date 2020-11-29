import React from 'react';

function SavedNewsHeader(props) {
  const word = props.saveCards.map((item) => { //получаем массив из слов
    return (
      item.keyword
    )
  })

  const wordsWithCount = {}; // создаем объект "слово: количество"
  for (let i = 0; i < word.length; i++) {
    if (wordsWithCount[word[i]] == undefined) {
      wordsWithCount[word[i]] = 1;
    } else {
      wordsWithCount[word[i]]++;
    }
  }

  //сортируем ключевые слова по популярности
  const keysSorted = Object.keys(wordsWithCount).sort(function (a, b) { return wordsWithCount[a] - wordsWithCount[b] }).reverse()
  const otherNumbers = keysSorted.length - 2;
  const numberWords = `${keysSorted.length < 4 && keysSorted.length > 2 ? keysSorted[2] : ''}`;
  const restArticle = `${keysSorted.length > 3 ? otherNumbers + ' другим' : ''}`;
  const andOther = `${keysSorted.length >= 3 ? 'и ' : ''}`;
  return (
    <section className="saved-news">
      <h3 className="saved-news__info">Сохранённые статьи</h3>
      <h2 className="saved-news__lead">{props.userData.name}, у вас {props.saveCards.length} сохранённых статей</h2>
      <h3 className="saved-news__hashtag">По ключевым словам:
  <strong> {keysSorted[0]}, {keysSorted[1]}</strong> {andOther}<strong>{numberWords} {restArticle}</strong></h3>
    </section>
  )
}

export default SavedNewsHeader
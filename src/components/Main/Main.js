import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import Card from '../Card/Card.js';
import About from '../About/About.js';
import Preloader from '../Preloader/Preloader'
import NoResults from '../NoResults/NoResults'

import ServerNotAvailable from '../ServerNotAvailable/ServerNotAvailable'

function Main(props) {
 
  function openAllCards() {
 //  setNumberСards(numberСards + 3);
 props.openThreeCards();
  }
  
  function resetCards() { 
  //  setNumberСards(3);
  props.resetCards();
  }
  
  return (
    <main className="content">
      <SearchForm onGetServerCards={props.onGetServerCards}
       resetCards={resetCards}
       searchError={props.searchError}
       />
      <Card cards={props.cards}
        isCardSearch={props.isCardSearch}
          numberСards={props.numberСards}
           openAllCards={openAllCards}
            onAddPlace={props.onAddPlace}
            keywords={props.keywords}
            isMenu={props.isMenu}
            saveCards={props.saveCards}
            handleCardDelete={props.handleCardDelete}
            />
       <NoResults isNoResults={props.isNoResults} />
       <ServerNotAvailable isNoServer={props.isNoServer}/>
      <Preloader isSpinner={props.isSpinner}/>
      <About /> 
    </main>
  )
}

export default Main;





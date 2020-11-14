import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import Card from '../Card/Card.js';
import About from '../About/About.js';
import Preloader from '../Preloader/Preloader'
import NoResults from '../NoResults/NoResults'

function Main() {

  return (
    <main className="content">
      <SearchForm />
      <Card />
       <NoResults />
      <Preloader />
      <About /> 
    </main>
  )
}

export default Main;





import React from 'react';
import autor from '../../images/autor.jpg';

function About() {

  
  return (
    <section className="about">

       <img  src={autor} className="about__image" alt="Портрет автора"/>
   
       <div className="about__info">
       <h2 className="about__title about__title_margin">Об авторе</h2>
    <p className="about__subtitle about__subtitle_margin-top">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
    <p className="about__subtitle about__subtitle_margin">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>


       </div>



</section>



  )
}

export default About;


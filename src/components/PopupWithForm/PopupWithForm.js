import React, { useState }  from 'react';


  function PopupWithForm(props){ 
 
    
    const overlayVisible = (e) => {
    if (e.target.classList.contains('popup')) {
      props.onClose()
    }
    }


    return (
        <section className={props.isOpen ? `${props.width} popup popup_opened`:`popup`} onClick={e => overlayVisible(e)}>
        <form onSubmit={props.onSubmit} className={`popup__container ${props.container}`}>
            <h2 className={`popup__title ${props.classTitle}`}>{props.title}</h2>
           
            {props.children}
          
            <button type="button" className={`popup__close-button ${props.close}`} aria-label="закрыть" onClick = {props.onClose}></button>
        </form>
    </section>
    )
  }

  export default PopupWithForm


  
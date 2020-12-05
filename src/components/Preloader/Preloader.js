import React from 'react';

function Preloader(props) {
  return (
    <div className={`${props.isSpinner} body-preloader`}>
    <i className="circle-preloader"></i>
    <p className="circle-title">Идет поиск новостей...</p>
</div>
    )
}

export default Preloader









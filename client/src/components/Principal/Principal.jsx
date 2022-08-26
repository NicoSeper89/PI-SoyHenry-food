import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Paginate from './Paginate/Paginate.jsx';
import style from './Principal.module.css';
import { useSelector } from 'react-redux';

export default function Principal() {

  const loading = useSelector(state => state.loading);



  return (
    <div className={style.principal}>

      <Header />

      {loading ?
        <img src="https://i.postimg.cc/QMJG1fzd/logohenryfoods.png" alt="logo" /> :
        <>
          <Route exact path={`/recipes`} render={() => <Paginate />}/>
          <Route exact path={`/recipes/:id`} render={() =>  <>Funca</>}/>
        </>
      }
      <Footer />
    </div>
  )
}
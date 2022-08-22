import React from 'react';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Paginate from './Paginate/Paginate.jsx';
import style from './Principal.module.css';

export default function Principal() {
    return (
        <div className={style.principal}>
          <Header />
          <Paginate />
          <Footer />
        </div>
    )
}
import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Paginate from './Paginate/Paginate.jsx';
import Details from './Details/Details.jsx';
import Create from './Create/Create.jsx';
import style from './Principal.module.css';
import { useSelector } from 'react-redux';
import Loading from './Loading/Loading.jsx';

export default function Principal({history}) {

  const { loading } = useSelector(state => state);

  return (
    <div className={style.principal}>

      <Header history={history}/>

      <Route exact path={`/recipes`} render={() => loading? <Loading /> : <Paginate />} />
  
      <Route exact path={`/recipes/:id`}
                   render={({ match }) => (match.params.id === "create")?
                                            (loading ? <img src="https://i.postimg.cc/QMJG1fzd/logohenryfoods.png" alt="logo" /> : 
                                                       <Create />) 
                                            : <Details id={match.params.id}/>
                            } />

      <Footer />
    </div>
  )
}
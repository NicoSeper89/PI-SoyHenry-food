import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Homepage from './components/Homepage/Homepage.jsx';
import Principal from './components/Principal/Principal.jsx';
import {getRecipesBackend} from './redux/actions.js';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesBackend())
  })

  return (
    <div className="App">
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/recipes">
        <Principal />
      </Route>
    </div>
  );
}

export default App;

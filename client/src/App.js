import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage.jsx';
import Principal from './components/Pricipal/Principal.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/recipes">
        <Principal />
      </Route>
    </div>
  );
}

export default App;

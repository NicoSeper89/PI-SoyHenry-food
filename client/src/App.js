import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Homepage />
      </Route>
    </div>
  );
}

export default App;

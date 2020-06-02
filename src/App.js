import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inner from './Inner';
import Home from './Home';
import Error from './Error';
import Series from './Series';
import Movies from './Movies';
function App() {
  return (
    <div>
      <Router>
      
       <Route path="/" component={Home}/>
<Route path="/series" component={Series}/>
      <Route path="/movies" component={Movies}/>
      <Route path="/home" component={Inner}/>
    
     
      
      </Router>
    </div>
  );
}

export default App;

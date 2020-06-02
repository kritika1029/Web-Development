import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Inner.css';

import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';

class Inner extends Component
{
            
render(){

return(
            
        <div className="container">
  
            <div className="block"><Link to="/series" onclick= { ()=> this.namechange() }>
            <div className="music bg-dark">
            <h3 className="text-center text-white">SERIES</h3>
            </div></Link>Program Series</div>
            <div className="block"><Link to="/movies">
            <div className="music bg-dark">
            <h3 className="text-center text-white">MOVIES</h3>
            </div></Link>Program Movies</div>
            
            
            
            </div>
            
        
        );
    
}
}
export default Inner;
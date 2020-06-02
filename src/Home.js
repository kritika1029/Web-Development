import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import './Footnav.css';
import Footnav from './Footnav';
import Inner from './Inner';
class Home extends Component{
    constructor()
    {
        super();
        this.state = {
            name:"Popular Titles"
            
        }
    }
    namechange()
    {
        this.setState({
            name:"Popular Series"
        })
    }
    
    render(){
return( <div>
            <div>
            <nav className="navbar navbar-default bg-primary">
               <div className="container-fluid">
               <div className="navbar-header">
               <a className="navbar-brand text-white" href="#"><h4>DEMO Streaming</h4></a>
               </div>
               <ul class="navbar-nav ml-auto d-inline">
               <li className="nav-item"><a href="#" className="btn btn-primary">Log-In</a></li>
               <li className="nav-item"><a href="#" className="btn btn-dark">Start your free trial</a></li>
               </ul>
               </div>
               </nav>
               <div className="container-fluid wid bg-dark"><span className="text-white" id="title">{this.state.name}</span> </div>
               </div>
            <Footnav />
               </div>
        )
    }
}
    
export default Home;
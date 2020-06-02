import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Footnav.css';
import {Link} from 'react-router-dom';

import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

const Footnav = () => {return( 
    
       <footer className="bg-dark">
               <div className="d-inline">
              <Link to="/home"> <span className="aab"><a href="#">Home</a></span></Link>
               <span className="aab"><a href="#">Terms and Conditions</a></span>               
               <span className="aab"><a href="#">Privacy Policy</a></span>
               <span className="aab"><a href="#">Collection Statement</a></span>
               <span className="aab"><a href="#">Help</a></span>
               <span className="aab"><a href="#">Manage Account</a></span>
               </div>
               <br /><br />
               <div className="text-white">
               Copyright <span className="glyphicon glyphicon-copyright">&copy;</span> 
               2016 DEMO Streaming.All rights Reserved.
               <br/><br/>
               <a
  href="https://www.facebook.com/learnbuildteach/"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
               <a
  href="https://www.instagram.com/learnbuildteach"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
            
             <img src="/images/appstore.png" className="feature rounded mr-2 border img-responsive border-light"/>
             <img src="/images/playstore.png" className="feature rounded mr-2 border img-responsive border-light"/>
			 <img src="/images/microsoft.png" className="feature rounded mr-2 border img-responsive border-light"/>
            
               </div>
               </footer>
               
        )
    }
    
     
export default Footnav;
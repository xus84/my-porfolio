import React from "react";
import "./navbar.css";
import picture from './images/pic.png';
 

export default function Navbar() {
  return (
    
      <header>
        <div className="photo_container">
           <img src={picture}  width="50px" height="50px"/>
        </div>
        <div className="central_nav">
            <div className="nav_dates">
              <span className="nav_name"><h3>JESUS GARCIA</h3></span>
              <span className="nav_job"><h4>Front-End Developer</h4></span>
            </div>
        </div>
        <div className="nav_container">
          <a href="/">Projects</a>
          <a href="/">Github</a>
          <a href="/">CV</a>
          <a href="/">Skills</a>
        </div>
      </header>
   
  );
}

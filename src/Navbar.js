import React from "react";
import "./navbar.css";
import picture from './images/pic.png';
import { Link } from "react-router-dom";
 

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
          <Link to="/Projects">Projects</Link>
          <a href="https://github.com/xus84">Github</a>
          <a href="https://www.linkedin.com/in/jesus-garcia-sanchis-72b884136/">LinkedIn</a>
          <Link to="/">CV</Link>
          <Link to="/">Skills</Link>
        </div>
      </header>
   
  );
}

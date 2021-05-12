import React from "react";
import Navbar from "./Navbar";
import "./Skills.css";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Link to="/">
          <i class="fas fa-long-arrow-alt-left"></i>
        </Link>
      </div>

      <div className="cards_row">
        <div className="card">
          <p className="ui">
            <u>User Experience</u>
          </p>
          <br></br>
          <ul>
            <li>
              <i class="fas fa-palette"></i>&nbsp;&nbsp;Paint
            </li>
            <li>
              <i class="fab fa-figma"></i>&nbsp;&nbsp;&nbsp;Figma
            </li>
            <li>
              <i class="fab fa-wordpress"></i>&nbsp;&nbsp;Wordpress
            </li>
          </ul>
        </div>

        <div className="card">
          <p className="ui">
            <u>Front-End</u></p>
          <p className="text">
          HTML5, CSS3/SASS, Bootstrap, JSON, Material Design, JavaScript
          (ECMAScript 2015), TypeScript, Angular, RxJS</p>
        </div>

        <div className="card">
        <p className="ui">
            <u>Back-End</u></p> 
            <p className="text">Node.js with Express</p>  
        </div>

        <div className="card">
            <p className="ui"><u>Mobile</u></p>
            <p className="text">Ionic-Angular, Progressive Web Apps</p> 
        </div>

        <div className="card">
            <p className="ui"><u>Software Tools/Services</u></p>
            <p className="text">Visual Studio Code, npm, GitHub, GitLab, GitExtensions, Netlify</p> 
        </div>
      </div>
    </div>
  );
}

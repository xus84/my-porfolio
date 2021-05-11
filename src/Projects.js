import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './Projects.css'
import Ecommerce from './images/3d-online-shopping.jpg'

export default function Projects() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="projects_container">
                <Link to="/"><div className="projects_arrow"><i class="fas fa-long-arrow-alt-left"></i></div></Link>
                <img src={Ecommerce} width="100%"/>
            </div>
        </div>
    )
}

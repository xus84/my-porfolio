import React from 'react'
import Navbar from './Navbar'
import background from './images/pexels-sky.jpeg'



export default function HomeScreen() {
    return (
        <>
        <Navbar/>
        <div className="home_container">
            <img src={background}/>
        </div>
        </>
    )
}

import React from 'react'
import Navbar from './Navbar'
import background from './images/sky.jpg'



export default function HomeScreen() {
    return (
        <>
        <Navbar/>
        <div className="home_container">
            <img src={background} width="100%" height="75%"/>
        </div>
        </>
    )
}

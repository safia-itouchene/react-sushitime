import React from 'react'
import Multsushi from "../assets/9.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage :`url(${Multsushi})`}}></div>
        <div className='aboutBotton'>
            <h1>ABOUT US</h1> 
            <p>Sushi (すし, 寿司, 鮨, 鮓) is a Japanese dish of prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, accompanied by a variety of ingredients (ねた, neta), such as seafood—often raw—and vegetables.</p>
        </div>
    </div>
  )
}

export default About

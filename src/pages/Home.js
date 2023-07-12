import React from 'react'
import {Link} from "react-router-dom";
import Homebagckround from '../assets/1.jpg';
import '../styles/Home.css';
function Home() {
  return (
  <div className='home' style={{backgroundImage :`url(${Homebagckround})`}}>
    <div className='headerContainer' >
       <h1>SUSHI TIME</h1>
       <p>SUSHI TO FIT ANY TASTE</p>
       <Link to="/menu">
         <button>ORDER NOW</button>
       </Link>
    </div>
  </div>
  )
}

export default Home

import React from 'react'
import "../assets/CSS/home.css"
import { Link } from 'react-router-dom'
import About from './About'

const Home = () => {
  return (
    <>
    <div className="hero">
    <div className='container '>
      <div className="left_content">
        <h1>Explore the World, <br /> One country at a Time</h1>
        <p>Discover the history, culture and beauty of every nation. <br />
        Sort, Search and Filter through countries to find the details you need.
        </p>
        <Link to="/about">Start Exploring <i class="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="right_box">
        <img src="/images/world.png" alt="world" />
      </div>
    </div>
    </div>
    <About/>
    </>
  )
}

export default Home
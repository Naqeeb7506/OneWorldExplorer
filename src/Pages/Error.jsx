import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/CSS/error.css"

const Error = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center error'>
        <h1>404</h1>
        <p>Sorry, the page not found</p>
        <NavLink to="/">Go To Home</NavLink>
    </div>
  )
}

export default Error
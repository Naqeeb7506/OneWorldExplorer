import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/CSS/navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body py-3" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand" href="#">OneWorldExplorer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <NavLink to="/" class="nav-link active">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/about" class="nav-link">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/country" class="nav-link">Country</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/contact" class="nav-link">Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
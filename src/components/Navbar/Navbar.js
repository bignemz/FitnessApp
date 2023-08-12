import React from 'react'
import "./Navbar.scss"

function Navbar() {
  return (
    <nav className="navbar">
        <h1>BODY MAX</h1>
        <ul className="nav-links">
        <li><a>Home</a></li>
        <li><a>Price</a></li>
        <li><a>Join us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar">
        <h1>ALPHA</h1>
        <div className="nav-links">
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='Pricepage'>Price</Link>
        <Link className='link' to='Joinpage'>Join</Link>

        </div>
    </nav>
  )
}

export default Navbar
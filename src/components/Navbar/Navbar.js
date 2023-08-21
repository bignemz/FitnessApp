import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'


function Navbar() {
  // const cart = useSelector((state) => state.cart)

  // const getTotalQuantity = () => {
  //   let total = 0
  //   cart.forEach(item => {
  //     total += item.quantity
  //   })
  //   return total
  // }
  return (
    <nav className="navbar">
        <h1>ALPHA</h1>
        <div className="nav-links">
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='Pricepage'>Price</Link>
        <Link className='link' to='Joinpage'>Join</Link>
        <Link className='cart' to=''>Cartitems:0</Link>

        </div>
    </nav>
  )
}

export default Navbar
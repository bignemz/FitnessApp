import React, { useRef }from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'


function Navbar() {
  const cart = useSelector((state) => state.cart)

  const navRef=useRef()

  function showNavbar(){
    navRef.current.classList.toggle("reponsive")
  }
  function removeNavbar(){
    navRef.current.classList.remove("reponsive")
  }


  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  console.log(getTotalQuantity())
  return (
    <nav  className="navbar">
        <h1>ALPHA</h1>
        <div ref={navRef} className="nav-links">
        <button className=' btn nav-close ' onClick={showNavbar}><i class="fa-solid fa-x"></i></button>
        <Link onClick={removeNavbar} className='link' to='/'>Home</Link>
        <Link onClick={removeNavbar}  className='link' to='Pricepage'>Price</Link>
        <Link   onClick={removeNavbar} className='link' to='Joinpage'>Join</Link>
        

        </div>
       <div className='addto'> 
       <Link className='cart' to=''>Cartitems:{getTotalQuantity()}</Link>
        <button className='nav-open btn' onClick={showNavbar}><i class="fa-solid fa-bars fa-2x " ></i></button>
       
       </div>

  
    </nav>
  )
}

export default Navbar
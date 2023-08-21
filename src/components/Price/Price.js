import React, { useState , useEffect } from 'react'
import './Price.scss'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartslice'
import Priceitem from './Priceitem'


function Price() {

  const [Cart, setCart]= useState([])

  React.useEffect(()=>{
    fetch("/api/carts").then(res=>res.json()).then(data=> setCart(data.carts))
  },[])

  console.log (Cart)
  const CartElement= Cart.map(cart=>
  <Priceitem  
    key={cart.id}
    id={cart.id}
    image={cart.imageUrl}
    name={cart.name}
    price={cart.price} 
    plan={cart.plan} 
    quantity={cart.quantity} />)


  return (
    <div className='product-plan'>  
      <h1>Our Plans</h1> 

      <div className="product-list"> 
      {CartElement}
    
      </div>
     
     
    </div>

   
  )
}

export default Price

import React, { useState , useEffect } from 'react'
import './Price.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import Priceitem from './Priceitem'


function Price() {

  const [Cart, setCart]= useState([])
  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
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
    quantity={cart.quantity}/>)


  return (
    <div className='product-plan'>  
      <h1>Our Plans</h1> 

      <div className="product-list"> 
      {CartElement}
    
      </div>
     <div className='Total'>
     <p className="total_p">
      Total ({getTotal().totalQuantity} items) 
       : <strong>${getTotal().totalPrice}</strong>
      </p>
      <button className='button'>Check out</button>
     </div>
     
    </div>

   
  )
}

export default Price

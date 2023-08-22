import React from 'react'
import { addtoCart } from '../../redux/cartslice'
import { useDispatch } from 'react-redux'

import './Priceitem.scss'
function Priceitem({id, image, name, price,plan, quantity=0}) {

  console.log(plan)
  
  const dispatch= useDispatch()

  function add(){

  

    dispatch(addtoCart({
      id, name, image, price,plan,quantity
     }))

  }
  return (
    <div className={`product ${plan}`}>
    <h2>{plan}</h2>
    <img src={image}alt=""/>
    <h3>{name}</h3>
   
      <p>Price: {price}</p>
    <button className="add-to-cart" onClick={add}>Add to Cart</button>
      </div>   
    
  )
}

export default Priceitem

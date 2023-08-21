import React from 'react'
import { addtoCart } from '../../redux/cartslice'
import { useDispatch } from 'react-redux'

import './Priceitem.scss'
function Priceitem({id, image, name, price, quantity=0 ,plan}) {

  
  
  const dispatch= useDispatch
  return (
    <div className={`product ${plan}`}>
    <h2>{plan}</h2>
    <img src={image}alt=""/>
    <h3>{name}</h3>
   
      <p>Price: {price}</p>
    <button className="add-to-cart" onClick={() => 
       dispatch(addtoCart({
        id, name, image, price
       }))
     } >Add to Cart</button>
      </div>   
    
  )
}

export default Priceitem

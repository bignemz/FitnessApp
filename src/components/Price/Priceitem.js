import React,{ useEffect } from 'react'
import { addtoCart } from '../../redux/cartslice'
import { useDispatch } from 'react-redux'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


import './Priceitem.scss'
function Priceitem({id, image, name, price,plan, quantity=0}) {
  const boxVariant={
    visible:{ opacity:1, scale:1,transition:{duration: 0.5} },
    hidden:{ opacity:1, scale:0 }
  }

  const control= useAnimation()
 const[ref,inView]=useInView()

 useEffect(()=>{

  if (inView) {
    control.start("visible")
  }
  else{
    control.start("hidden")
  }
 },[control,inView])


  console.log(plan)
  
  const dispatch= useDispatch()

  function add(){

  

    dispatch(addtoCart({
      id, name, image, price,plan,quantity
     }))

  }
  return (
    <motion.div
    ref={ref}
    variants={boxVariant}
    animate={control}
    initial="hidden"
    
    className={`product ${plan}`}>
    <h2>{plan}</h2>
    <img  className='Price-img' src={image}alt=""/>
    <h3>{name}</h3>
   
      <p>Price: {price}</p>
    <button className="add-to-cart" onClick={add}>Add to Cart</button>
      </motion.div>   
    
  )
}

export default Priceitem

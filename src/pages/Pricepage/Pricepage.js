import React from 'react'
import Bmi from '../../components/Bmi/Bmi'
import Price from '../../components/Price/Price'
import {motion} from 'framer-motion'
import './Pricepage.scss'

function Pricepage() {
  const boxVariant={
    visible:{ opacity:1, scale:1,transition:{duration: 0.5} },
    hidden:{ opacity:1, scale:0 }
  }

  

 

  return (
    <div className='Price'>
        <div 
        className='Intro'>
      <div className='Intro-text'>
       
         <motion.div 
           variants={boxVariant}
           animate="visible"
           initial="hidden"
           className='Intro-text1'>
           <Bmi/>
        </motion.div>
         </div>
      
      <div className='Intro-photo'> <img src="./assest/gym11.jpg" alt=""/></div>
    </div>
        <Price/>
   
    </div>
  )
}

export default Pricepage

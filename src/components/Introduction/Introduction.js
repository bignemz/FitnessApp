import React from 'react'
import './Introduction.scss'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

function Introduction() {
  const boxVariant={
    visible:{ opacity:1, scale:1,transition:{duration: 0.5} },
    hidden:{ opacity:1, scale:0 }
  }

 
  return (
    <div className='Intro'>
      <div className='Intro-text'>
       
         <motion.div 
          variants={boxVariant}
           animate="visible"
           initial="hidden"
         className='Intro-text1'>
         <span><h1>GO BIG</h1></span><h1>OR</h1><span><h1>GO HOME</h1></span>
           <Link className='link' to='Pricepage'><button>Get started</button></Link>
        
        </motion.div>
         </div>
      
      <div className='Intro-photo'> <img src="./assest/gym11.jpg" alt=""/></div>
    </div>
  )
}

export default Introduction

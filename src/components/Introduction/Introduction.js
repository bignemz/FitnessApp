import React from 'react'
import './Introduction.scss'
import { Link } from 'react-router-dom'

function Introduction() {
  return (
    <div className='Intro'>
      <div className='Intro-text'>
       
         <div className='Intro-text1'>
           <span><h1>GO BIG</h1></span><h1>OR</h1><span><h1>GO HOME</h1></span>
           <Link className='link' to='Pricepage'><button>Get started</button></Link>
        </div>
         </div>
      
      <div className='Intro-photo'> <img src="./assest/gym11.jpg" alt=""/></div>
    </div>
  )
}

export default Introduction

import React from 'react'
import Bmi from '../../components/Bmi/Bmi'
import Price from '../../components/Price/Price'

import './Pricepage.scss'

function Pricepage() {
  return (
    <div className='Price'>
        <div className='Intro'>
      <div className='Intro-text'>
       
         <div className='Intro-text1'>
           <Bmi/>
        </div>
         </div>
      
      <div className='Intro-photo'> <img src="./assest/gym11.jpg" alt=""/></div>
    </div>
        <Price/>
   
    </div>
  )
}

export default Pricepage

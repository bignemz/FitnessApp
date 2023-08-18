import React from 'react'
import Bmi from '../../components/Bmi/Bmi'
import Price from '../../components/Price/Price'

import './Pricepage.scss'

function Pricepage() {
  return (
    <div className='Price'>
        <Bmi/>
        <Price/>
   
    </div>
  )
}

export default Pricepage

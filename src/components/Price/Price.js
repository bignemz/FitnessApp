import React from 'react'
import './Price.scss'

function Price() {
  return (
    <div className='product-plan'>  
      <h1>Our Plans</h1> 
       <div className="product-list">     
    <div className="product Silver">
    <h2>Silver</h2>
    <img src="./assest/gym1.jpg" alt=""/>
    <h3>Underweight:</h3>
   
      <p>Price: $19.99</p>
    <button className="add-to-cart">Add to Cart</button>
      </div>
    <div className="product Gold">
    <h2>Gold</h2>
    <img src="./assest/gym1.jpg" alt=""/>
    <h3>NormalWeight:</h3>
    <p>Price: $24.99</p>
    <button className="add-to-cart">Add to Cart</button>
    </div>
    <div className="product Plantinum">
    <h2>Plantinum</h2>
    <img src="./assest/gym1.jpg" alt=""/>
     <h3>Overweight:</h3>
     <p>Price: $14.99</p>
     <button className="add-to-cart">Add to Cart</button>
    </div>
    </div>
    </div>

   
  )
}

export default Price

import React from 'react'
import './Price.scss'

function Price() {
  return (
    <div class="product-list">
    <div class="product">
    <img src="./assest/gym1.jpg" alt=""/>
      <h3>Product 1</h3>
      <p>Price: $19.99</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
    <div class="product">
    <img src="./assest/gym1.jpg" alt=""/>
      <h3>Product 2</h3>
      <p>Price: $24.99</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
    <div class="product">
    <img src="./assest/gym1.jpg" alt=""/>
      <h3>Product 3</h3>
      <p>Price: $14.99</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
   
  )
}

export default Price

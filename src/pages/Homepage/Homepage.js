import React from 'react'
import Introduction from '../../components/Introduction/Introduction'
import About from '../../components/AboutUs/About'
import "./Homepage.scss"

function Homepage() {
  return (
    <div className='Home'>
        <Introduction/>
        <About/>
    </div>
  )
}

export default Homepage

import React from 'react'
import './Join.scss'
import { Link } from 'react-router-dom'

function Join() {
  return (
    <div className='join-text'>
        <h1>Join Us </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore nostrum earum nisi corporis. Ipsam architecto, adipisci praesentium eaque perspiciatis</p>
        
      <Link className='link' to='Contact'><button className='Join-btn'>contact</button></Link>
    </div>
  )
}

export default Join

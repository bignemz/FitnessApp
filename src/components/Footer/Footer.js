import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div>
       <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-x-twitter"></i>
        </a>
      </div>
      <p>&copy; 2023 Alpha. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer

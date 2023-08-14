import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div>
       <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="/twitter-icon.png" alt="Twitter" />
        </a>
      </div>
      <p>&copy; 2023 Alpha. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer

import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <a href="#" className='logo'>
            <img src="./Images/logo.png" alt="kasuka-logo" className='kasuka-logo' />
            KASUKA
        </a>

        <nav className="list">
              <li><a className="nav-link" href="#">Home</a></li>
              <li><a className="nav-link" href="#">Aboute</a></li>
              <li><a className="nav-link" href="#">Services</a></li>
              <li><a className="nav-link" href="#">Portfolio</a></li>
              <li><a className="nav-link" href="#">Team</a></li>
              <li><a className="nav-link" href="#">Contact Us</a></li>
        </nav>

        <a href="#about" className="start-btn">Start</a>
    </div>
  )
}

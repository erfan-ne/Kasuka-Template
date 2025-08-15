import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import HeaderBox from './HeaderBox'

export default function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <p>Powerful Digital Solutions with</p>
        <p>KASUKA</p>
        <p>We are a team of talented digital marketers</p>
        <HeaderBox />
    </div>
  )
}

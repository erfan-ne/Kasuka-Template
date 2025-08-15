import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import HeaderBox from './HeaderBox'

export default function Header() {
  return (
    <div className='header'>
        <Navbar/>

        <div className="titles">
          <h1 className='title1'>Powerful Digital Solutions with</h1>
          <span className='title2'>KASUKA</span>
          <h2 className='title3'>We are a team of talented digital marketers</h2>
        </div>

        <HeaderBox />
    </div>
  )
}

import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import HeaderBox from './HeaderBox'

export default function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <HeaderBox />
    </div>
  )
}

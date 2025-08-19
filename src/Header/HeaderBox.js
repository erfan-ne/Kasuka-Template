import React from 'react'
import './HeaderBox.css'

export default function HeaderBox({icon, title}) {
  return (
    <div>
      <div className='box'>
        <span className='box-icon'>{icon}</span>
        <h3><a className='box-title' href="#">{title}</a></h3>
      </div>
    </div>
  )
}

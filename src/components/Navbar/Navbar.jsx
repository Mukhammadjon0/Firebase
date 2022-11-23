import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
        <NavLink className={'navlink'} to={'/'}>Navbar</NavLink>
        <NavLink className={'navlink'} to={'/'}>Home</NavLink>
        <NavLink className={'navlink'} to={'/music'}>Music</NavLink>

    </nav>
  )
}

export default Navbar
import {NavLink} from 'react-router-dom';

import './Navbar.css'

import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/about">
            Page 1
        </NavLink>
        <NavLink to="/products">
            Page 2
        </NavLink>
        <NavLink to="/page3">
            Page 3
        </NavLink>
    </nav>
  )
}

export default Navbar
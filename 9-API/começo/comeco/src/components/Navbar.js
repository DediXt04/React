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
            About
        </NavLink>
        <NavLink to="/products">
            Products
        </NavLink>
        <NavLink to="/page3">
            Page 3
        </NavLink>
    </nav>
  )
}

export default Navbar
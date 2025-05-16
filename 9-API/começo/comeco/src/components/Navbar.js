import {NavLink} from 'react-router-dom';

import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo" )} >
            Home
        </NavLink>
        <NavLink to="/page1" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo" )} >
            Page 1
        </NavLink>
        <NavLink to="/page2" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo" )} >
            Page 2
        </NavLink>
        <NavLink to="/page3" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo" )} >
            Page 3
        </NavLink>
    </nav>
  )
}

export default Navbar
import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : undefined)}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : undefined)}>
                    Entrar
                </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : undefined)}>
                    Cadastrar
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : undefined)}>
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
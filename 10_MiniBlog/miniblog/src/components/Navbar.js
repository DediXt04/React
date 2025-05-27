import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

import { useAuthValue } from "../context/AuthContext"

const Navbar = () => {
    const { user } = useAuthValue();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                                Novo post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/userpage" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                                Perfil
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
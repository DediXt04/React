import React from 'react'
import { useAuthValue } from '../../context/AuthContext'
import styles from './UserPage.module.css' // ou './UserPage.css'

const UserPage = () => {
  const { user } = useAuthValue()

  return (
    <div className={styles.profileContainer}>
      <h2>Perfil</h2>

      <p>
        Bem-vindo ao seu perfil! Aqui você pode ver suas informações e gerenciar sua conta.
      </p>

      {user && (
        <div className={styles.userInfo}>
          <p><strong>Nome:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  )
}

export default UserPage

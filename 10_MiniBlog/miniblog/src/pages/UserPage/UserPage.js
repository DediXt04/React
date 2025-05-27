import React from 'react'
import { useAuthValue } from '../../context/AuthContext'
import styles from './UserPage.module.css' // ou './UserPage.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from "react-router-dom";


const UserPage = () => {
  const { user } = useAuthValue()
  const { logout } = useAuthentication();
  const navigate = useNavigate();

  return (
    <div className={styles.profileContainer}>
      <h2>Perfil</h2>

      <p>
        Bem-vindo ao seu perfil! Aqui você pode ver suas informações e gerenciar sua conta.
      </p>

      {user && (
        <div className={styles.userInfo} >
          <p data-girando><strong>Nome:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
      <button className="btn" onClick={() => navigate("/edituserpage")}>Editar</button>
      <button onClick={() => {
        // Exibe a caixa de confirmação
        const isConfirmed = window.confirm("Tem certeza que deseja sair?");

        if (isConfirmed) {
          // Se o usuário confirmar, execute o logout
          logout();
        } else {
          // Se o usuário cancelar, não faz nada
          alert("Logout cancelado.");
        }
      }} className='btn'>
        Sair
      </button>
    </div>
  )
}

export default UserPage

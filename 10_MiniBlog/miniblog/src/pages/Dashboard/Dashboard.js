import React from 'react'
import styles from "./Dashboard.module.css"

import { Link } from 'react-router-dom'

//HOOKS
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.uid

  const { documents: posts, loading } = useFetchDocuments('posts', null, uid)

  const { deleteDocument } = useDeleteDocument('posts')



  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">Criar primeiro post</Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Post</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) =>
              <div key={post.id} className={styles.post_row}>
                <div className={styles.post_info}>
                  <img src={post.image} alt={post.title} />
                  <p>{post.title}</p>
                </div>
                <div>
                  <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver</Link>
                  <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>

                  <button onClick={() => {
                    // Exibe a caixa de confirmação
                    const isConfirmed = window.confirm("Tem certeza que deseja apagar?");

                    if (isConfirmed) {
                      // Se o usuário confirmar, execute o logout
                      deleteDocument(post.id);
                    } else {
                      // Se o usuário cancelar, não faz nada
                      alert("Post não deletado.");
                    }
                  }} className='btn btn-outline btn-danger'>
                    Excluir
                  </button>
                </div>

              </div>)}
        </>
      )}


    </div>
  )
}

export default Dashboard
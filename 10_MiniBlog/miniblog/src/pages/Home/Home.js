//CSS
import styles from './Home.module.css'

//HOOKS
import { useNavigate, Link } from "react-router-dom"
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';


//COMPONENTS
import PostDetail from '../../components/PostDetail';

const Home = () => {
  const [query, setQuery] = useState("")
  const { documents: posts = [], loading } = useFetchDocuments("posts")

  const navigate = useNavigate()
  

  const hanldeSubmit = (e) => {
    e.preventDefault()

    if(query){
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
      <h1>Posts mais recentes</h1>
      <form onSubmit={hanldeSubmit} className={styles.search_form}>
        <input type="text" placeholder="Busque por tags" onChange={(e) => setQuery(e.target.value)} />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando posts...</p>}
        {posts && posts.map((post) => <PostDetail post={post}/>)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nenhum post encontrado</p>
            <Link to="/posts/create" className='btn'> Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home
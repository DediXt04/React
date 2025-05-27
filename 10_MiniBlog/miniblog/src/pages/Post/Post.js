import styles from './Post.module.css'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
  const { id } = useParams(); // ✅ Correção aqui
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_detail}>
      {loading && <p>Carregando post...</p> }
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <h3>Este post trata sobre:</h3>
          <p>{post.body}</p>
          <div className={styles.tags}>
          {post.tags.map((tag)=>(
                <p key={tag}><span>#</span>{tag}</p>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Post;

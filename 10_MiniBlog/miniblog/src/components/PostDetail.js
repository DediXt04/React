import styles from './PostDetail.module.css';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const PostDetail = ({ post }) => {
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className={styles.post_detail}>
      <img
        src={post.image}
        alt={post.title}
        className={styles.img}
        onDoubleClick={handleDoubleClick}
      />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>{post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>{tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</Link>
    </div>
  );
};

export default PostDetail;

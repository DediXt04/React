// CSS
import styles from './About.module.css'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className='title' data-girando>
        Sobre o <span>Mini Blog</span>
      </h2>

      <p>
        O <strong>Mini Blog</strong> é um projeto criado com o objetivo de praticar tecnologias modernas de desenvolvimento web, oferecendo uma plataforma simples e funcional para a publicação de conteúdos.
      </p>

      <h3>Tecnologias Utilizadas:</h3>
      <ul>
        <li><strong>Frontend:</strong> React.js com React Router DOM e CSS Modules</li>
        <li><strong>Backend:</strong> Firebase Firestore e Firebase Authentication</li>
        <li><strong>Funcionalidades:</strong> autenticação de usuários, criação/edição de posts, busca por tags, listagem de posts públicos, e muito mais.</li>
      </ul>

      <p>
        O principal foco deste projeto é explorar os fundamentos do React, hooks personalizados e integração com serviços de backend em nuvem como o Firebase.
      </p>

      <p>
        Fique à vontade para navegar pelo blog, explorar os posts criados por outros usuários ou até mesmo criar os seus!
      </p>

      <Link to="/posts/create" className="btn" data-girando>
        Criar novo post
      </Link>
    </div>
  );
};

export default About;

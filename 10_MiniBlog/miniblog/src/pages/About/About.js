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
        O <strong>Mini Blog</strong> é um projeto desenvolvido com foco em aprendizado e prática de tecnologias modernas do desenvolvimento web.
      </p>

      <ul>
        <li><strong>Frontend:</strong> React.js com React Router e CSS Modules</li>
        <li><strong>Backend:</strong> Firebase Firestore e Firebase Authentication</li>
        <li><strong>Funcionalidades:</strong> autenticação de usuários, criação e edição de posts, busca por tags e visualização de posts públicos.</li>
      </ul>

      <p>
        O objetivo deste projeto é explorar os fundamentos do React e como integrá-lo com serviços em nuvem como o Firebase, criando um ambiente completo para publicação de conteúdos.
      </p>

      <p>
        Sinta-se à vontade para explorar o blog, criar seus próprios posts ou apenas navegar pelo conteúdo já publicado.
      </p>

      <Link to="/posts/create" className="btn" data-girando>
        Criar novo post
      </Link>
    </div>
  );
};

export default About;

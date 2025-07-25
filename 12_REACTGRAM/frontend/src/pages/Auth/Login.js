import './Auth.css';

import { Link } from 'react-router-dom';
import Message from '../../components/Message';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login, reset } from '../../slices/authSlices';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(''); // Para erros do frontend

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Validação simples
    if (!email || !password) {
      setFormError('Por favor, preencha todos os campos.');
      return;
    }

    const user = {
      email,
      password
    };

    dispatch(login(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id='login'>
      <h2>ReactGram</h2>
      <p className="subtitle">Faça o login para ver o que há de novo.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">Entrar</button>

        {/* Mostrar erro do frontend ou do backend */}
        {(formError || error) && <Message msg={formError || error} type="error" />}
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;

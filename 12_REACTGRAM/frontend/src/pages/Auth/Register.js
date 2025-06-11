import './Auth.css';

import { Link } from 'react-router-dom';
import Message from '../../components/Message';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register, reset } from '../../slices/authSlices';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState(''); // Para erros do frontend

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Validação simples no frontend antes de enviar para o backend
    if (!name || !email || !password || !confirmPassword) {
      setFormError('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setFormError('As senhas não coincidem.');
      return;
    }

    const user = {
      name,
      email,
      password,
      confirmPassword
    };

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id='register'>
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name} />
        <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password} />
        <input type="password" placeholder='Confirme a senha' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />

        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        
        {/* Mostrar erro do frontend ou do backend */}
        {(formError || error) && <Message msg={formError || error} type="error" />}
      </form>
      <p>
        Já tem uma conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Register;

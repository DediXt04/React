import './MyForm.css';
import { useState } from 'react';

const MyForm = ({ user }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const [bio, setBio] = useState(user?.bio || "");
  const [role, setRole] = useState(user?.role || "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);

    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Digite seu nome!"
            onChange={handleName}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu email!"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>
            <span>Bio:</span>
            <textarea 
            name="bio" 
            placeholder='Descrição' 
            onChange={(e)=> setBio(e.target.value)} 
            value={bio}>
            </textarea>
          </label>
          <label>
            <span>Função no sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role} >
              <option value="user">Usúario</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
        </div>
        <label ></label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

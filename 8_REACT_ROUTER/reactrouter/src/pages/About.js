import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>Sobre o Projeto</h1>
      <p>
        Este é um projeto de exemplo utilizando <strong>React Router</strong>, com o objetivo de praticar a navegação entre páginas, rotas dinâmicas e busca com parâmetros na URL.
      </p>
      <p>
        A aplicação simula uma pequena loja virtual com produtos fictícios, permitindo:
      </p>
      <ul>
        <li>Visualizar uma lista de produtos;</li>
        <li>Ver detalhes individuais de cada produto;</li>
        <li>Buscar produtos pelo nome;</li>
        <li>Navegar por diferentes páginas usando rotas definidas com <code>react-router-dom</code>.</li>
      </ul>
      <p>
        O projeto também utiliza o <code>json-server</code> como uma API falsa para fornecer os dados dos produtos.
      </p>
      <p>
        Criado como parte do aprendizado em <strong>React.js</strong>.
      </p>
    </div>
  );
};

export default About;

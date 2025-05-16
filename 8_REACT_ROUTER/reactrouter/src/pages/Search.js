import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const url = `http://localhost:3001/products?q=${query}`;
  const { data: items, loading, error } = useFetch(url);

  console.log("Query recebida:", query);


  return (
    <div>
      <h1>Resultados disponíveis</h1>

      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao buscar dados.</p>}
      {!loading && items?.length === 0 && <p>Nenhum resultado encontrado para "{query}".</p>}

      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;

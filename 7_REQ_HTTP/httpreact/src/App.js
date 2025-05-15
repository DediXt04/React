import './App.css';
import { useState, useEffect } from 'react';

import { useFetch } from './hooks/useFetch';
const url = 'http://localhost:3001/products'; 

function App() {
  const [products, setProducts] = useState([]);
  const {data: items, httpConfig} = useFetch(url);
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchData();
  }, []);
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price };
    /*
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
    */

    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  }

  

  return (
    <div className="App">
      <h1>Lista de produtos:</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name} />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price} />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;

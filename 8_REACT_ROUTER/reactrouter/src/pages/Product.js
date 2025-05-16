import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3001/products/" + id;
  const {data: product, loading, error} = useFetch(url);


  return (
    <>
    <p>Id do produto: {id}</p>
    {loading && <p>Carregando...</p>}
    {error && <p>{error}</p>}
    {product && (
      <div>
        <h2>{product.name}</h2>
        <p>R$ {product.price}</p>
        <Link to={`/products/${product.id}/informacoes`}>Mais informações </Link>
      </div>
    )}
    </>
  );
};

export default Product;
import { useParams } from "react-router-dom";

const Informacoes = () => {
    const { id } = useParams();
  return (
    <div>
        <h1>Informações de produtos: {id}</h1>
    
    </div>
  );
};

export default Informacoes;
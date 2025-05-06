import { useState } from "react";

const CondicionalRender = () =>{

    const [x, setX] = useState(false);

    const [name, setName] = useState("Joã")


    return <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for TRUE, sim!</p>}
        {!x && <p>Se x for FALSE, sim!</p>}
        <button onClick={() => setX (true)}>Clica!</button>
        <h1>If ternario</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João!</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName ("João")}>Clica!</button>
    </div>
};

export default CondicionalRender;
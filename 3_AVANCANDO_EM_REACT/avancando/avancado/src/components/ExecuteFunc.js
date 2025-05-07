import React from "react";

const ExecuteFunc = ({myFunc}) => {
    return (
        <div>
            <button onClick={myFunc}> Clique aqui para executar a função!</button>
        </div>
    );
};

export default ExecuteFunc;
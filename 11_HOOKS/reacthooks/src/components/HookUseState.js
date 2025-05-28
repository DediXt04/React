import React, { useState } from 'react'

const HookUseState = () => {

    let userName = "André"

    const [name, setName] = useState("Alan")

    const changeNames = () =>{
        userName = "André Queiroz"

        setName("Alan Queiroz")
    } 

    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
        </div>
    )
}

export default HookUseState
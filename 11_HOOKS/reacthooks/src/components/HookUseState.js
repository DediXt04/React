import React, { useState } from 'react'

const HookUseState = () => {

    let userName = "André"

    const [name, setName] = useState("Alan")

    const changeNames = () => {
        userName = "André Queiroz"

        setName("Alan Queiroz")
    }

    const [age, setAge] = useState(18)

    const handleSumbit = (e) =>{
        e.preventDefault()

        //envio pra API
        console.log("Idade: " + age)
    }


    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            <form onSubmit={handleSumbit}>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            
            <p>Você tem {age} anos!</p>
            <hr />
        </div>
    )
}

export default HookUseState
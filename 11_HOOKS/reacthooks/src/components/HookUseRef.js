import { useEffect, useState, useRef } from "react"



const HookUseRef = () => {

    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        console.log("useEffect uso")
        numberRef.current = numberRef.current + 1;
    })

    const inputRef = useRef()
    const [text,setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setText("")

        inputRef.current.focus()
    }

    return (
        <div>
            <h2>UseRef</h2>
            {"1- useRef"}
            <p>O componente renderizou: {numberRef.current} vezes</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
            {"2- useRef Dom"}
            <form onSubmit={handleSubmit}>
                <input type="text"  ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
                <input type="submit" value="Enviar" />
            </form>
            <hr />
        </div>
    )
}

export default HookUseRef
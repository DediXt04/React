import { useEffect, useState } from 'react'

const HookUseEffect = () => {

  useEffect(() => {
    console.log("Estou sendo executado!")

  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }

  useEffect(() => {
    console.log("Serei executado apenas uma vez!")
  }, [])

  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda!")
    }
  }, [anotherNumber])

  /*
  useEffect(() => {

    const timer = setTimeout(() => {
      console.log("Hello World")
      setAnotherNumber(anotherNumber +1)
    }, 2000)

    return () => clearTimeout(timer)

  }, [anotherNumber])
  */

  return (
    <div>
      <h1>useEffect</h1>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>

      <hr />
    </div>

  )
}

export default HookUseEffect
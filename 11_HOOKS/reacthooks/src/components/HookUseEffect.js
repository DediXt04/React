import { useEffect, useState } from 'react'

const HookUseEffect = () => {

  useEffect(()=>{
    console.log("Estou sendo executado!")
  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number+1)
  }

  useEffect(()=>{
    console.log("Serei executado apenas uma vez!")
  },[])


  return (
    <div>
      <h1>useEffect</h1>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>


    </div>

  )
}

export default HookUseEffect
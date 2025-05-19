import React from 'react'
import { useContext } from 'react'
import {CounterContext} from '../context/CounterContext'

const Products = () => {
  const {counter} = useContext(CounterContext);
  return (
    <div>
      <h1>Você está na página Products</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Products
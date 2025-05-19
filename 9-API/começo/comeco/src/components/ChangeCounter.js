import {useContext} from 'react';
import {CounterContext} from '../context/CounterContext';

import './ChangeCounter.css';

import React from 'react'

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext);

  return (
    <div>
        <button onClick={()=> setCounter(counter + 1)} className='btn_green'>
            +1
        </button>
        <button onClick={() => setCounter(counter -1)} className='btn_red'>
            -1
        </button>
    </div>
  )
}

export default ChangeCounter
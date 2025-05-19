import React from 'react';
//import { useContext } from 'react';
//import {CounterContext} from '../context/CounterContext';
import './Home.css';

//contexts
import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

//components
import ChangeCounter from '../components/ChangeCounter';

const Home = () => {
  //const {counter} = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  return (
    <div>
      <h1 style={{color: color }}>Você está na home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={()=> setTitleColor("PINK")} className='btnPink'>Rosa</button>
        <button onClick={() => setTitleColor("BLUE")} className='btnBlue'>Azul</button>
      </div>
    </div>
  );
};

export default Home;
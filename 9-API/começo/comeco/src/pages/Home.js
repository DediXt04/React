import React from 'react';
import { useContext } from 'react';
import {CounterContext} from '../context/CounterContext';

//components
import ChangeCounter from '../components/ChangeCounter';

const Home = () => {
  const {counter} = useContext(CounterContext);
  return (
    <div>
      <h1>Você está na home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
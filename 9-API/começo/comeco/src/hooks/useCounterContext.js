import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounterContext deve ser usado dentro de um CounterContextProvider');
  }

  return context;
};

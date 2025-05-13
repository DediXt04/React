//CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

// Components
import { StartScreen } from './components/StartScreen';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <h1>Game</h1>}
      {gameStage === 'end' && <h1>End</h1>}
    </div>
  );
}

export default App;

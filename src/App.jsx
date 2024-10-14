import React, { useState } from 'react';
import StartPage from './components/StartPage';
import Board from './components/Board';
import './index.css';

function App() {
  const [player, setPlayer] = useState(null);

  return (
    <div className="App">
      {player ? <Board player={player} /> : <StartPage setPlayer={setPlayer} />}
    </div>
  );
}

export default App;

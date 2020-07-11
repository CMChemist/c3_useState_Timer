import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import BouncingBalls from './components/BouncingBalls/BouncingBalls';

function App() {
  const [ move, setMove ] = useState(false);

  const handleClickStart = () => {
    setMove(move => !move);
  }

  return (
    <div className="App">
      <BouncingBalls className="ballContainer" move={move}/>
      <Counter className="counter" handleClickStart={handleClickStart}/>
    </div>
  );
}

export default App;

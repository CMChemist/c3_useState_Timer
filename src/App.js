import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import BouncingBalls from './components/BouncingBalls/BouncingBalls';

function App() {
  const [ move, setMove ] = useState(false);
  const [ startBtnLabel, setStartBtnLabel ] = useState(true);

  const handleClickStart = () => {
    setMove(move => !move);
    setStartBtnLabel(startBtnLabel => !startBtnLabel);
  }

  const handleClickReset = () => {
    setMove(false);
    setStartBtnLabel(true);
  }

  return (
    <div className="App">
      <BouncingBalls className="ballContainer" move={move}/>
      <Counter 
        className="counter" 
        handleClickStart={handleClickStart} 
        handleClickReset={handleClickReset} 
        startBtnLabel={startBtnLabel}
      />
    </div>
  );
}

export default App;

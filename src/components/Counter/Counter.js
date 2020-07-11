// importing useState
import React, { useState } from "react";
import './Counter.scss';

const Counter= (props) => {
  // state declaration holding [value, updateFunction]
  const [counter, setCounter] = useState(0);

  const handleClickReset = () => {
    setCounter(0);
    props.handleClickReset();
  }

  // component render
  return (
    <div className="counterContainer">
      {/* lets display our state in a p tag */}
      <p>{counter}</p>

      {/* lets provide a button to update our state */}
      <button onClick={() => setCounter(previousCount => previousCount + 1)}>
        Count
      </button>
      <div className="startGameContainer" >
        <button onClick={() => props.handleClickStart()} >
          {props.startBtnLabel ? 'Start Game': 'Stop Game'}
        </button>
        <button onClick={() => handleClickReset()}>Reset Game</button>
      </div>
    </div>
  );
};

export default Counter;

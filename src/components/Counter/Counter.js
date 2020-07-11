// importing useState
import React, { useState } from "react";
import './Counter.scss';

const Counter= (props) => {
  // when component renders for first time
  const initialValue = 0;

  // state declaration holding [value, updateFunction]
  const [stateValue, stateUpdater] = useState(initialValue);



  // component render
  return (
    <div className="counterContainer">
      {/* lets display our state in a p tag */}
      <p>{stateValue}</p>

      {/* lets provide a button to update our state */}
      <button onClick={() => stateUpdater(previousState => previousState + 1)}>
        Count
      </button>
      <button onClick={() => props.handleClickStart()} >Start Game</button>
    </div>
  );
};

export default Counter;

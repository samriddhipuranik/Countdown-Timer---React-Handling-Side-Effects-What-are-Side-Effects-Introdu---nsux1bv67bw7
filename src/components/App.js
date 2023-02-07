import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
const [counter, setCounter]= useState(0);
let decrementCount =()=>{
  <label>Enter the countdown integer:

    <input type={Number} value={inputs.counter}></input>
  </label>
  setCounter(counter-1);
};

useEffect(() => {
  clearTimer(getDeadTime());
}, []);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={decrementCount}  /> sec.
        </h1>
      </div>
      <div id="current-time">0</div>
    </div>
  )
}


export default App;

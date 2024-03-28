import React, { useState } from "react";

function LudoBoard() {
  let [Move, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr,setarr]=useState(["no moves"]);


  // In each of the update functions (`updateBlue`, `updateGreen`, `updateYellow`, `updateRed`):

  // 1. We use the `setMoves` function to update tthe state.
  // 2. We pass a function to `setMoves` that receives the previous state (`prevMoves`) as an argument.
  // 3. Inside this function, we spread the previous state (`...prevMoves`) to keep other properties unchanged.
  // 4. Then, we update the count for the corresponding color by incrementing its value by 1 in the new state object.
  function updateBlue() {
    // Correct the way of updating stateF
    setMoves((prevMoves) => ({
      ...prevMoves,
      blue: prevMoves.blue + 1,
    }));

    // passing array as an state variable ,like an objects
    setarr([...arr,"blue move"]);
    console.log(arr);
  }

  function updateGreen() {
    // Correct the way of updating state
    setMoves((prevMoves) => ({
      // The spread operator (...) is used in this context to create a shallow copy of an object.
      ...prevMoves,
      green: prevMoves.green + 1,
    }));
  }

  function updateYellow() {
    // Correct the way of updating state
    setMoves((prevMoves) => ({
      ...prevMoves,
      yellow: prevMoves.yellow + 1,
    }));
  }

  function updateRed() {
    // Correct the way of updating state
    setMoves((prevMoves) => ({
      ...prevMoves,
      red: prevMoves.red + 1,
    }));
  }

  return (
    <div className="bg-indigo-400 w-1/2 h=1/2 border-2 border-black justify-center items-center m-4 p-4">
      <p className="text-3xl font-bold underline  ">Ludo Board Game </p>
      <p>{arr}</p>
      <div>
        <h1>Blue Moves = {Move.blue}</h1>
        <button className="bg-blue-600 p-2" onClick={updateBlue}>
          +1
        </button>
        <h1>Yellow Moves ={Move.yellow} </h1>
        <button className="bg-yellow-500 p-2" onClick={updateYellow}>
          +1
        </button>
        <h1>Green Moves = {Move.green}</h1>
        <button className="bg-green-600 p-2" onClick={updateGreen}>
          +1
        </button>
        <h1>Red Moves = {Move.red}</h1>
        <button className="bg-red-500 p-2" onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}

export default LudoBoard;

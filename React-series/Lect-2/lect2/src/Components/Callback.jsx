import React from "react";
import { useState } from "react";

function Callback() {
  let [count, setcount] = useState(0);

  function onChange() {
    setcount((currentcount) => {
      return currentcount + 1;
    });
    setcount((currentcount) => {
      return currentcount + 1;
    });
    //jab ak value dosri value p depmnd kry to hum tab call back function k use krty krty h
  }

  return (
    <div className="bg-cyan-200 m-3 ">
      <h1 className="text-3xl ">State in React</h1>
      <p className="text-2xl">Count is {count}</p>

      <button
        className="border-2 border-black bg-slate-500  rounded-lg p-2 m-4"
        onClick={onChange}
      >
        Click
      </button>
    </div>
  );
}

export default Callback;

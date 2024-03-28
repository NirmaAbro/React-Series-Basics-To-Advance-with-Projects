import React from "react";
import { useState } from "react";
import LikeBtn from "./LikeBtn";

function State() {
  let [count, setcount] = useState(0);

  function onChange() {
    setcount(count + 1);
    console.log("count is updated");
  }

  return (
    <div className="bg-cyan-200 m-3 ">
      <h1 className="text-3xl ">State in React</h1>
      <p className="text-2xl">Count is {count}</p>

      <div className=" justify-center items-center  flex m-5">
        <button
          className="border-2 border-black bg-slate-500  rounded-lg p-2 m-4"
          onClick={onChange}
        >
          Click
        </button>
        <LikeBtn />
      </div>
    </div>
  );
}

export default State;

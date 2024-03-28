import React from "react";

function HandlingEvents() {
  let showText = () => {
    console.log("button has been clicked");
  };
  return (
    <div>
      {/* <button
        onClick={showText}
        className="bg-blue-500 p-3 rounded-lg items-center"
      >
        Click me{" "}
      </button> */}

      {/* handling non Click Events  */}
      {/* <button
        onMouseDown={showText}
        className="bg-blue-500 p-3 rounded-lg items-center"
      >
        Click me{" "}
      </button>{" "}*/}

      <button
        onMouseOver={showText}
        className="bg-blue-500 p-3 rounded-lg items-center"
      >
        Click me{" "}
      </button>{" "}
      
    </div>
  );
}

export default HandlingEvents;

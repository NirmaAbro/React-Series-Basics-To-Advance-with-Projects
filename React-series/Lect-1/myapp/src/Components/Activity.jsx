// import React from "react";
// function Activity({ name }) {
//   let color = { backgroundColor: "cyan" };
//   return (
//     <div>
//       <h1 style={color}>Hello {name}</h1>
//     </div>
//   );
// }

// export default Activity;

//activity two
import React from "react";
import img from "../images/pic.jpg";

function Activity() {
  return (
    <div className="bg-black">
      <div className="mainDiv m-5 border-2 border-black  ">
        <h1 className="text-center justify-center items-center text-2xl font-bold p-2 text-white">
          Block Buster deals with computer Accessories | Shop Now
        </h1>
        <div className="innerDiv flex  m-4 justify-evenly">
          <div className="box1 border-2 border-black font-medium p-3  m-2 bg-cyan-200 rounded-lg">
            <h1 className="">LogiTech MX Master 35</h1>
            <img src={img} className="w-60 h-60 m-1 rounded-lg" />
            <h2>8,000 DPI</h2>
            <h3>5 Programmable Button</h3>
            {/* //yellow container  */}
            <div className="bg-yellow-200 p-3">12,4568$</div>
          </div>
          {/* box 2 */}
          <div className="box1 border-2 border-black font-medium p-3  m-2 bg-cyan-200 rounded-lg">
            <h1>LogiTech MX Master 35</h1>
            <img src={img} className="w-60 h-60 m-1 rounded-lg" />
            <h2>8,000 DPI</h2>
            <h3>5 Programmable Button</h3>
            {/* //yellow container  */}
            <div className="bg-yellow-200 p-3">12,4568$</div>
          </div>
          {/* box 3  */}
          <div className="box1 border-2 border-black font-medium p-3  m-2 bg-cyan-200 rounded-lg">
            <h1>LogiTech MX Master 35</h1>
            <img src={img} className="w-60 h-60 m-1 rounded-lg" />
            <h2>8,000 DPI</h2>
            <h3>5 Programmable Button</h3>
            {/* //yellow container  */}
            <div className="bg-yellow-200 p-3">12,4568$</div>
          </div>
          {/* box 4  */}
          <div className="box1 border-2 border-black font-medium p-3  m-2 bg-cyan-200 rounded-lg">
            <h1>LogiTech MX Master 35</h1>
            <img src={img} className="w-60 h-60 m-1 rounded-lg" />
            <h2>8,000 DPI</h2>
            <h3>5 Programmable Button</h3>
            {/* //yellow container  */}
            <div className="bg-yellow-200 p-3">12,4568$</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;

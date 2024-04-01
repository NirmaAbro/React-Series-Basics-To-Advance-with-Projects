import React, { useState } from "react";

function CommentsForm() {
    let [formdata,setformdata]=useState({
        username:"",
        rating :5,
        comment:"",

    })
    function handleinputchange(event){
        let fieldname=event.target.name;
        let newvalue=event.target.value;

        // console.log(fieldname);
        // console.log(fieldvalue);
        setformdata((currdata)=>{
            currdata[fieldname]=newvalue;
            return { ...currdata};
        })
    }

    let handlesubmit=(event)=>{
        event.preventDefault();
        console.log(formdata);
        setformdata({
            fullname:" ",
            username:" ",
            password:""
        })
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Add Comment</h2>
        <form onSubmit={handlesubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={handleinputchange}
              value={formdata.username}
              placeholder="Enter your username"
              className="border-2 border-gray-500 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comments"
              className="block text-gray-700 font-bold mb-2"
            >
              Comments:
            </label>
            <textarea
              id="comments"
              name="comments"
              onChange={handleinputchange}
              value={formdata.comment}
              placeholder="Enter your comments"
              className="border-2 border-gray-500 rounded-md p-2 w-full h-32 resize-none"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-bold mb-2"
            >
              Rating:
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              onChange={handleinputchange}
              value={formdata.rating}
              placeholder="Enter rating (1-5)"
              min="1"
              max="5"
              className="border-2 border-gray-500 rounded-md p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentsForm;

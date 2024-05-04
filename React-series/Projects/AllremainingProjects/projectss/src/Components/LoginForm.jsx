import React, { useState } from "react";

function LoginForm() {
    let [email,setemail]=useState("");
    let [password,setpassword]=useState("");
    let [newEntry,setnewEntry]=useState([]);
    
    const submithandler =(e)=>{
        e.preventDefault();
        const newentry={email :email ,password:password};
        setnewEntry([...newEntry,newentry]);
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <form action="" className="bg-gray-200 p-6 rounded-lg shadow-lg" onSubmit={submithandler}>
        <h1 className="text-2xl justify-center items-center m-auto flex">
          LOGIN FORM
        </h1>
        <div className="flex justify-center items-center ">
          <label htmlFor="email">Email</label>

          <input
            type="text"
            name="email"
            id="email"
            className="m-7 rounded-full bg-white w-full"
            value={email}
            onChange={(e)=>{
                setemail(e.target.value);
            }}

          />
        </div>

        {/* //password */}
        <div className="justify-center items-center m-auto">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            className=" m-7 rounded-full"
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
          />
        </div>
        <button
          type="submit"
          className="justify-center items-center m-auto bg-blue-600 p-2 rounded-full flex text-white"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

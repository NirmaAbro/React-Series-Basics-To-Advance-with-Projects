import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";


function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="bg-gray-400 border-gray-600  border-2 m-auto p-5 max-w-xs rounded-xl ">
      <h2 className="text-white text-center mb-4 font-semibold ">Login form</h2>
      <input
        className="bg-gray-200 border border-gray-400 mb-2 px-3 py-2 rounded w-full"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <input
        className="bg-gray-200 border border-gray-400 mb-2 px-3 py-2 rounded w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;

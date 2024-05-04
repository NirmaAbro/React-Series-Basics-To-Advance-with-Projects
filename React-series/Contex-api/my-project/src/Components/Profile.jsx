import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="text-red-500 font-semibold justify-center items-center flex ">
        Please login
      </div>
    );

  return (
    <div className="text-green-500 justify-center items-center flex font-semibold">
      Welcome {user.username}
    </div>
  );
}

export default Profile;

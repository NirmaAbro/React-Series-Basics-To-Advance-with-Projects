import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";



function LikeBtn() {
    let [like,setlike]=useState(false);
    function toogle(){
        setlike(!like);
    }
  return (
    <div>
      <p onClick={toogle}>
        {
            like ? <FaHeart  className='text-3xl '/> : <FaHeartBroken className='text-3xl '/>
        } 
      </p>
    </div>
  )
}

export default LikeBtn








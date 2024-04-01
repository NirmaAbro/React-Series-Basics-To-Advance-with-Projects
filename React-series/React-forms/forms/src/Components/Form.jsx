import React, { useState } from 'react'

function Form() {
    // let [fullname,setfullname]=useState("nirma");
    let [formdata,setformdata]=useState({
        fullname:"",
        username:"",
        password:"",
    })
    // function handlefullname(event){
    //     setfullname(event.target.value);
    // }

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
    <div>
      <form action="" onSubmit={handlesubmit}>
      {/* Clickability: Clicking on a label associated with an input field focuses the input field itself. This enhances user experience by making it easier to interact with form elements */}

        <label htmlFor="username">First Name</label>
        <input  name='fullname' className='m-2' id="fullname" type="text" placeholder='enter your name' value={formdata.fullname} onChange={handleinputchange}/>
        

        <br /> <br /> <br /> 

        {/* two  */}

        <label htmlFor="username">username Name</label>
        <input name='username' className='m-2' id="username" type="text" placeholder='enter your username' value={formdata.username} onChange={handleinputchange}/>

        <br /> <br /> <br />
        {/* passowrd  */}
        <label htmlFor="password">username Name</label>
        <input name='password' className='m-2' id="password" type="password" placeholder='enter your password' value={formdata.password} onChange={handleinputchange}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Form

import React from 'react'

function Form() {
    function handlerForm(event){
        event.preventDefault();
        console.log("form has been submitted");
    }
  return (
    <div>
      <form>
        <input type="text" placeholder='write something' className="border-2 rounded-full m-3 border-black"/>
        <button onClick={handlerForm} className='border-2 rounded-full m-3 border-black bg-pink-200 p-3 '>Submit</button>
      </form>
    </div>
  )
}

export default Form

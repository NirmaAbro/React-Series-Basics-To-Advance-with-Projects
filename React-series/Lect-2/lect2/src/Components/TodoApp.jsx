import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  let [todo, settodo] = useState([
    { task: "sample-task", id: uuidv4(), isdone: false },
  ]);
  let [newtodo, setnewtodo] = useState("");

  function addnewtask() {
    // console.log("new task has been added");
    settodo((prevtodo) => {
      return [...prevtodo, { task: newtodo, id: uuidv4(), isdone: false }];
    });
    setnewtodo(" ");
  }
  function updatetodovalue(event) {
    setnewtodo(event.target.value);
  }
  function deletetodo(id) {
    settodo((prevs) => todo.filter((prevs) => prevs.id != id));
  }

  function touppercaseAll() {
    settodo((prevTodo) => {
      return prevTodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      });
    });
  }

  function markalldone() {
    settodo((prevTodo) => {
      return prevTodo.map((todo) => {
        return {
          ...todo,
          isdone: true,
        };
      });
    });
  }

  function touppercaseone(id) {
    settodo((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      });
    });
  }

  function markdone(id) {
    settodo((prevtodo) => {
      return prevtodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            // isdone: todo.isdone,
            isdone: true,
          };
        } else {
          return todo;
        }
      });
    });
  }

  return (
    <div className="justify-center text-white font-medium items-center border-2 border-black m-5 p-5 rounded-lg bg-slate-600">
      <input
        type="text"
        value={newtodo}
        onChange={updatetodovalue}
        placeholder="Add a Task"
        className="border-2 m-2 text-black rounded-lg p-2 border-black font-black "
      />{" "}
      <br />
      <p
        onClick={addnewtask}
        className="w-20 m-auto cursor-pointer rounded-full bg-red-300 justify-center items-center"
      >
        Add Task
      </p>
      <br />
      <br />
      <br />
      <br />
      <hr className="border-2 m-2 border-black" />
      {/* //new div  */}
      <div className="bg-slate-500 rounded-lg w-1/2 h-1/2  justify-center items-center m-auto ">
        <p className="w-20 m-auto rounded-full bg-red-300 justify-center items-center">
          Task List
        </p>
        <ul>
          {todo.map((elements) => (
            <li key={elements.id}>
              <span
                style={
                  elements.isdone ? { textDecoration: "line-through" } : {}
                }
              >
                {elements.task}
              </span>

              <button
                className="bg-red-300 rounded-lg p-1 m-6"
                onClick={() => deletetodo(elements.id)}
              >
                Delete
              </button>
              <button
                onClick={() => touppercaseone(elements.id)}
                className="bg-cyan-500 rounded-lg p-1 m-6"
              >
                To-Upper-Case One
              </button>
              <button
                onClick={() => markdone(elements.id)}
                className="bg-cyan-500 rounded-lg p-1 m-6"
              >
                mark as done
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={touppercaseAll}
          className="bg-red-300 rounded-lg p-1 m-6"
        >
          To-Upper-Case All
        </button>
        <button
          onClick={markalldone}
          className="bg-cyan-500 rounded-lg p-1 m-6"
        >
          mark all done
        </button>
      </div>
    </div>
  );
}

export default TodoApp;

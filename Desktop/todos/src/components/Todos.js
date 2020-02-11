import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState();
  return (
    <div className="box1">
      <h1>My Todo List</h1>
      <div className="box2 input-group mb-3">
        <input
          type="text"
          class="form-control"
          Name={inputValue}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Enter new todo"
          aria-label="Enter new todo"
          aria-describedby="button-addon2"
        />
        <div className="box3 input-group-append" />
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            setTodos(prevTodos => [...prevTodos, inputValue]);
            setInputValue("");
          }}
          type="button"
        >
          Add
        </button>
      </div>
      {todos.map((value, index) => {
        console.log(value, index);
      })}
    </div>
  );
};
export default Todos;

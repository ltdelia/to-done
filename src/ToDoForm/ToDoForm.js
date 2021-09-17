import React, { useState } from "react";

import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [enteredToDo, setEnteredToDo] = useState("");

  const toDoChangeHandler = (event) => {
    setEnteredToDo(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onSubmitToDo(enteredToDo);

    setEnteredToDo("");
  };

  return (
    <div className="to-do-banner">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          value={enteredToDo}
          onChange={toDoChangeHandler}
          className="to-do-input"
          placeholder="Enter To Do Here..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;

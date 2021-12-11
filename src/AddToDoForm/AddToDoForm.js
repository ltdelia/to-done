import React, { useState } from "react";

import "./AddToDoForm.css";

const AddToDoForm = (props) => {
  const [enteredToDo, setEnteredToDo] = useState("");

  const toDoChangeHandler = (event) => {
    setEnteredToDo(event.target.value);
  };

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
          name="toDo"
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

export default AddToDoForm;

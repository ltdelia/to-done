import React, { useState } from "react";
import { Button } from "@mui/material";

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
        <Button className="to-do-submit" type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default AddToDoForm;

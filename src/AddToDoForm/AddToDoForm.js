import React, { useState } from "react";
import { Button } from "@mui/material";

import "./AddToDoForm.css";

const AddToDoForm = ({onSubmitToDo}) => {
  const [enteredToDo, setEnteredToDo] = useState("");

  const toDoChangeHandler = (event) => {
    setEnteredToDo(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    onSubmitToDo(enteredToDo);

    setEnteredToDo("");
  };

  return (
    <div className="to-do-banner flex justify-center my-5 mx-28 py-0 px-28">
      <form className="inline-flex grow-1" onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="toDo"
          value={enteredToDo}
          onChange={toDoChangeHandler}
          className="to-do-input grow-2 w-full p-1 rounded"
          placeholder="Enter To Do Here..."
        />
        <Button className="to-do-submit" type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddToDoForm;

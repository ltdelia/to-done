import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

import "./EditToDoForm.css";

const EditToDoForm = ({currentToDo, onUpdateToDo, setIsEditing}) => {
  const [toDo, setToDo] = useState(currentToDo);

  useEffect(() => {
    setToDo(currentToDo);
  }, [currentToDo, onUpdateToDo, setIsEditing]);

  const toDoChangeHandler = (event) => {
    const { name, value } = event.target;
    setToDo({ ...toDo, [name]: value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    onUpdateToDo(toDo.id, toDo);

    setIsEditing(false);

    setToDo("");
  };

  return (
    <div className="to-do-banner flex justify-center my-5 mx-28 py-0 px-28">
      <form className="inline-flex grow-1" onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="toDo"
          value={toDo.toDo}
          onChange={toDoChangeHandler}
          className="to-do-input grow-2 w-full p-1 rounded"
          placeholder="Enter To Do Here..."
        />
        <Button className="to-do-submit" variant="contained" type="submit">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditToDoForm;

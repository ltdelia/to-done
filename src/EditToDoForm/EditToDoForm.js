import React, { useState, useEffect } from "react";

import "./EditToDoForm.css";

const EditToDoForm = (props) => {
  const [toDo, setToDo] = useState(props.currentToDo);

  useEffect(() => {
    setToDo(props.currentToDo);
  }, [props]);

  const toDoChangeHandler = (event) => {
    const { name, value } = event.target;
    setToDo({ ...toDo, [name]: value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onUpdateToDo(toDo.id, toDo);

    props.setIsEditing(false);

    setToDo("");
  };

  return (
    <div className="to-do-banner">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="toDo"
          value={toDo.toDo}
          onChange={toDoChangeHandler}
          className="to-do-input"
          placeholder="Enter To Do Here..."
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditToDoForm;

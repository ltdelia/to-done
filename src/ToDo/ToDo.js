import React, { useState } from "react";

import "./ToDo.css";

const ToDo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editToDoHandler = () => {
    setIsEditing(true);
  };

  const deleteToDoHandler = (event) => {
    const toDoIdToDelete = event.target.id.substring(event.target.id.length - 1);
    props.onDeleteToDo(toDoIdToDelete);
  };

  const submitToDoHandler = () => {
    setIsEditing(false);
  };

  return (
    <li className="to-do">
      {isEditing ? (
        <div>
          <input value={props.content} onChange={props.onChange} />
          <button onClick={submitToDoHandler} type="submit">
            Submit
          </button>
        </div>
      ) : (
        <div>
          <span>{props.content}</span>{" "}
          <button onClick={editToDoHandler} type="button">
            Edit
          </button>
          <button id={"to-do-delete-" + props.id} type="button" onClick={deleteToDoHandler}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default ToDo;

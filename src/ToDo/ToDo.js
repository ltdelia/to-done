import React, { useState } from "react";

import "./ToDo.css";

const ToDo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const editToDoHandler = () => {
    setIsEditing(true);
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
          <button type="button">Delete</button>
        </div>
      )}
    </li>
  );
};

export default ToDo;

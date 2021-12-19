import React from "react";

import "./ToDo.css";

const ToDo = (props) => {
  const editToDoHandler = (event) => {
    const toDoIdToEdit = event.target.id.substring(event.target.id.length - 1);
    props.onEditToDo(toDoIdToEdit);
  };

  const completeToDoHandler = (event) => {
    const toDoIdToComplete = event.target.id.substring(
      event.target.id.length - 1
    );
    props.onCompleteToDo(toDoIdToComplete);
  };

  const deleteToDoHandler = (event) => {
    const toDoIdToDelete = event.target.id.substring(
      event.target.id.length - 1
    );
    props.onDeleteToDo(toDoIdToDelete);
  };

  return (
    <li className="to-do" id={"to-do-" + props.id} key={props.id}>
      <div>
        <span>{props.content}</span>{" "}
        <button
          id={"to-do-edit-" + props.id}
          onClick={editToDoHandler}
          type="button"
        >
          Edit
        </button>
        <button
          id={"to-do-delete-" + props.id}
          type="button"
          onClick={deleteToDoHandler}
        >
          Delete
        </button>
        <button
          id={"to-do-complete-" + props.id}
          type="button"
          onClick={completeToDoHandler}
        >
          Mark Complete
        </button>
      </div>
    </li>
  );
};

export default ToDo;

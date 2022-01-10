import React from "react";

import { Button } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
      <span className="to-do-content">{props.content}</span>{" "}
      <div className="to-do-controls">
        <Button
          id={"to-do-edit-" + props.id}
          className="to-do-control"
          type="button"
          onClick={editToDoHandler}
          variant="contained"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          id={"to-do-delete-" + props.id}
          className="to-do-control"
          type="button"
          onClick={deleteToDoHandler}
          variant="contained"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          id={"to-do-complete-" + props.id}
          className="to-do-control"
          type="button"
          onClick={completeToDoHandler}
          variant="contained"
          startIcon={<CheckIcon />}
        >
          Mark Complete
        </Button>
      </div>
    </li>
  );
};

export default ToDo;

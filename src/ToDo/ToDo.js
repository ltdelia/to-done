import React from "react";

import { Button } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "./ToDo.css";

const ToDo = ({
  id,
  content,
  complete,
  onEditToDo,
  onCompleteToDo,
  onDeleteToDo,
}) => {
  const editToDoHandler = (event) => {
    const toDoIdToEdit = event.target.id.split("_")[1];
    onEditToDo(toDoIdToEdit);
  };

  const completeToDoHandler = (event) => {
    const toDoIdToComplete = event.target.id.split("_")[1];
    onCompleteToDo(toDoIdToComplete);
  };

  const deleteToDoHandler = (event) => {
    const toDoIdToDelete = event.target.id.split("_")[1];
    onDeleteToDo(toDoIdToDelete);
  };

  return (
    <li
      className="to-do flex justify-between items-center rounded-sm shadow-sm mb-4 p-2"
      id={"to-do-" + id}
      key={id}
    >
      <span className="to-do-content">{content}</span>{" "}
      {!complete && (
        <div className="to-do-controls ml-auto">
          <Button
            id={"to-do-edit_" + id}
            className="to-do-control"
            type="button"
            onClick={editToDoHandler}
            variant="contained"
            color="secondary"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            id={"to-do-delete_" + id}
            className="to-do-control"
            type="button"
            onClick={deleteToDoHandler}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            id={"to-do-complete_" + id}
            className="to-do-control"
            type="button"
            onClick={completeToDoHandler}
            variant="contained"
            color="success"
            startIcon={<CheckIcon />}
          >
            Complete
          </Button>
        </div>
      )}
    </li>
  );
};

export default ToDo;

import React from "react";

import ToDo from "../ToDo/ToDo";
import "./ToDoList.css";

const ToDoList = (props) => {
  const editToDoHandler = (toDoId) => {
    props.onEditToDoFromList(toDoId);
  };

  const deleteToDoHandler = (toDoId) => {
    props.onDeleteToDoFromList(toDoId);
  };

  return (
    <div className="to-do-list">
      <h2 className="to-do-header">
        <span className="to-do-count">{props.items.length}</span> To Dos
      </h2>
      <ul className="to-do-body">
        {props.items.map((toDo, index) => (
          <ToDo
            id={toDo.id}
            key={index}
            content={toDo.toDo}
            onEditToDo={editToDoHandler}
            onDeleteToDo={deleteToDoHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

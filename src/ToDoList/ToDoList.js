import React from "react";

import ToDo from "../ToDo/ToDo";
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <div className="to-do-list">
      <h2 className="to-do-header">
        <span className="to-do-count">X</span> To Dos
      </h2>
      <ul className="to-do-body">
        {props.items.map((toDo, index) => (
          <ToDo key={index} content={toDo.toDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

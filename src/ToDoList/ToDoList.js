import React, { useState, useEffect } from "react";

import ToDo from "../ToDo/ToDo";
import "./ToDoList.css";

const ToDoList = (props) => {
  const [completed, setCompleted] = useState(false);
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    setToDos(props.items);
  }, [props.items]);

  const toggleToDos = () => {
    completed ? setCompleted(false) : setCompleted(true);
  };

  const editToDoHandler = (toDoId) => {
    props.onEditToDoFromList(toDoId);
  };

  const completeToDoHandler = (toDoId) => {
    props.onCompleteToDoFromList(toDoId);
  };

  const deleteToDoHandler = (toDoId) => {
    props.onDeleteToDoFromList(toDoId);
  };

  return (
    <div className="to-do-list">
      <h2 className="to-do-header">
        <span className="to-do-count">
          {toDos.filter((toDo) => toDo.complete === completed).length}
        </span>
        {completed ? " Complete " : " Incomplete "}
        {toDos.filter((toDo) => toDo.complete === completed).length === 1
          ? "To Do"
          : "To Dos"}
        <button onClick={toggleToDos}>Toggle Complete ToDos </button>
      </h2>
      <ul className="to-do-body">
        {toDos
          .filter((toDo) => toDo.complete === completed)
          .map((toDo) => (
            <ToDo
              id={toDo.id}
              key={"to-do-" + toDo.id}
              content={toDo.toDo}
              complete={toDo.complete}
              onEditToDo={editToDoHandler}
              onCompleteToDo={completeToDoHandler}
              onDeleteToDo={deleteToDoHandler}
            />
          ))}
      </ul>
    </div>
  );
};

export default ToDoList;

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
      <div className="to-do-header">
        <h2>
          <span className="to-do-count">
            {toDos.filter((toDo) => toDo.complete === completed).length}
          </span>
          <span>
            {completed ? " Complete " : " Incomplete "}
            {toDos.filter((toDo) => toDo.complete === completed).length === 1
              ? "To Do"
              : "To Dos"}
          </span>
        </h2>
        <button className="to-do-toggle" onClick={toggleToDos}>
          Toggle Complete ToDos{" "}
        </button>
      </div>
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

import { useState } from "react";
import "./App.css";

import AddToDoForm from "./AddToDoForm/AddToDoForm";
import EditToDoForm from "./EditToDoForm/EditToDoForm";
import ToDoList from "./ToDoList/ToDoList";

const starterToDos = [
  { id: 1, toDo: "Do the dumb things I gotta do", complete: false },
  { id: 2, toDo: "Touch the puppet head", complete: false },
];

const initialFormState = {
  id: null,
  toDo: "",
  complete: false,
};

function App() {
  const [toDos, setToDos] = useState(starterToDos);
  const [isEditing, setIsEditing] = useState(false);
  const [currentToDo, setCurrentToDo] = useState(initialFormState);

  const saveToDo = (enteredToDo) => {
    setToDos((prevToDos) => {
      return [
        {
          id: toDos.length + 1,
          toDo: enteredToDo,
          complete: false,
        },
        ...prevToDos,
      ];
    });
  };

  const editToDo = (toDoIdToEdit) => {
    setIsEditing(true);
    const toDoToEdit = toDos.filter(
      (toDo) => toDo.id === parseInt(toDoIdToEdit)
    )[0];
    setCurrentToDo(toDoToEdit);
  };

  const updateToDo = (id, updatedToDo) => {
    setToDos((prevToDos) => {
      return prevToDos.map((toDo) =>
        toDo.id === parseInt(id) ? updatedToDo : toDo
      );
    });
  };

  const completeToDo = (toDoIdToComplete) => {
    const toDoToComplete = toDos.filter(
      (toDo) => toDo.id === parseInt(toDoIdToComplete)
    )[0];
    const completedToDo = { ...toDoToComplete, complete: true };
    updateToDo(toDoIdToComplete, completedToDo);
  };

  const deleteToDo = (toDoIdToDelete) => {
    setIsEditing(false);
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id !== parseInt(toDoIdToDelete));
    });
  };

  return (
    <div className="app">
      {isEditing ? (
        <EditToDoForm
          setIsEditing={setIsEditing}
          currentToDo={currentToDo}
          onUpdateToDo={updateToDo}
        />
      ) : (
        <AddToDoForm onSubmitToDo={saveToDo} />
      )}
      <ToDoList
        items={toDos}
        onEditToDoFromList={editToDo}
        onCompleteToDoFromList={completeToDo}
        onDeleteToDoFromList={deleteToDo}
      />
    </div>
  );
}

export default App;

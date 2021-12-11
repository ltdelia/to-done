import { useState } from "react";
import "./App.css";

import AddToDoForm from "./AddToDoForm/AddToDoForm";
import EditToDoForm from "./EditToDoForm/EditToDoForm";
import ToDoList from "./ToDoList/ToDoList";

const starterToDos = [
  { id: 1, toDo: "Do the dumb things I gotta do" },
  { id: 2, toDo: "Touch the puppet head" },
];

const initialFormState = {
  id: null,
  toDo: "",
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
      return prevToDos.map((toDo) => (toDo.id === id ? updatedToDo : toDo));
    });
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
        onDeleteToDoFromList={deleteToDo}
      />
    </div>
  );
}

export default App;

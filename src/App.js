import { useEffect, useState } from "react";
import "./App.css";

import { db } from "./firebase";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import AddToDoForm from "./AddToDoForm/AddToDoForm";
import EditToDoForm from "./EditToDoForm/EditToDoForm";
import ToDoList from "./ToDoList/ToDoList";

const initialFormState = {
  id: null,
  toDo: "",
  complete: false,
};

function App() {
  const [toDos, setToDos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentToDo, setCurrentToDo] = useState(initialFormState);

  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      setToDos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          toDo: doc.data().toDo,
          complete: doc.data().complete,
        }))
      );
    });
  }, []);

  const saveToDo = (enteredToDo) => {
    addDoc(collection(db, "todos"), {
      toDo: enteredToDo,
      complete: false,
      timestamp: serverTimestamp(),
    });
  };

  const editToDo = (toDoIdToEdit) => {
    setIsEditing(true);
    const toDoToEdit = toDos.filter((toDo) => toDo.id == toDoIdToEdit)[0];
    setCurrentToDo(toDoToEdit);
  };

  const updateToDo = async (id, { toDo }) => {
    console.log(id, toDo);
    const toDoToUpdate = doc(db, "todos", id);
    await updateDoc(toDoToUpdate, {
      toDo: toDo,
    });
  };

  const completeToDo = async (toDoIdToComplete) => {
    const toDoToUpdate = doc(db, "todos", toDoIdToComplete);
    await updateDoc(toDoToUpdate, {
      complete: true,
    });
  };

  const deleteToDo = async (toDoIdToDelete) => {
    setIsEditing(false);
    await deleteDoc(doc(db, "todos", toDoIdToDelete));
  };

  return (
    <div className="app p-5">
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

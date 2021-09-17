import { useState } from 'react';
import './App.css';

import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';

const starterToDos = [
  { id: 1, toDo: 'Do the dumb things I gotta do' },
  { id: 2, toDo: 'Touch the puppet head' },
];

function App() {

  const [toDos, setToDos] = useState(starterToDos);

  const saveToDo = (enteredToDo) => {
    setToDos(prevToDos => {
      return [{
        id: toDos.length + 1,
        toDo: enteredToDo
      }, ...prevToDos];
    });  }


  return (
    <div className="app">
      <ToDoForm onSubmitToDo={saveToDo} />
      <ToDoList items={toDos} />
    </div>
  );
}

export default App;

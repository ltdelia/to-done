import './App.css';

import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';

function App() {
  return (
    <div className="app">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;

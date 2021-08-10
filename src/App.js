import './App.css';

function App() {
  return (
    <div className="app">
      <div className="to-do-banner">
        <input type="text" className="to-do-input" placeholder="Enter To Do Here..." />
      </div>
      <h2 className="to-do-header"><span className="to-do-count">X</span> To Dos</h2>
      <ul className="to-do-list">
        <li className="to-do">Do the dumb things I gotta do</li>
        <li className="to-do">Touch the puppet head</li>
      </ul>  
    </div>
  );
}

export default App;

import React from "react";

import './ToDoForm.css';

const ToDoForm = (props) => {
  return (
    <div className="to-do-banner">
      <input
        type="text"
        className="to-do-input"
        placeholder="Enter To Do Here..."
      />
    </div>
  );
};

export default ToDoForm;

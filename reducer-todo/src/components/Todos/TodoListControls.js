import React from "react";

const TodoListControls = ({ onClearCompleted }) => (
  <button onClick={onClearCompleted}>Clear Completed</button>
);

export default TodoListControls;

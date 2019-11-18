import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({
  todo,
  onCompleteTodo,
  onEditTodo,
  onDeleteTodo,
} = {}) => {
  const { id, item, completed, uuid } = todo;

  const handleCompleteClick = () => {
    onCompleteTodo(todo);
  };

  const handleEditClick = () => {
    onEditTodo(todo);
  };

  const handleDeleteClick = () => {
    onDeleteTodo(todo);
  };

  return (
    <li
      id={`todo-${id}`}
      data-uuid={uuid}
      completed={completed ? 1 : 0}
      className={`todo-item${completed ? " completed" : ""}`}
    >
      <div className="todo-item-container">
        <p>
          <Link to={`/todo/${id}`}>{item}</Link>
        </p>
        <button onClick={handleCompleteClick}>
          {completed ? "⍻" : "✓"}
        </button>
        <button onClick={handleEditClick}>🖉</button>
        <button id={`delete-${id}`} onClick={handleDeleteClick}>
          ×
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

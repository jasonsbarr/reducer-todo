import React from "react";

const TodoItem = ({ todo, onCompleteTodo } = {}) => {
  const { id, item, completed, uuid } = todo;
  const handleClick = () => {
    onCompleteTodo(todo);
  };

  return (
    <li
      id={`todo-${id}`}
      data-uuid={uuid}
      completed={completed ? 1 : 0}
      className={`todo-item${completed ? " completed" : ""}`}
    >
      <div className="todo-item-container">
        <p>{item}</p>
        <button onClick={handleClick}>{completed ? "⍻" : "✓"}</button>
      </div>
    </li>
  );
};

export default TodoItem;

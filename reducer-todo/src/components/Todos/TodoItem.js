import React from "react";

const TodoItem = ({ todo: { item, completed, id } } = {}) => (
  <li
    id={id}
    completed={completed ? 1 : 0}
    className={`todo-item${completed ? " completed" : ""}`}
  >
    {item}
  </li>
);

export default TodoItem;

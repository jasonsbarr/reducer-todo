import React from "react";
import { Link } from "react-router-dom";
import TodoItemControls from "./TodoItemControls";

const TodoItem = ({
  todo,
  onCompleteTodo,
  onEditTodo,
  onDeleteTodo,
} = {}) => {
  const { id, item, priority, due_at, completed, uuid } = todo;

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
        <TodoItemControls todo={todo} />
      </div>
    </li>
  );
};

export default TodoItem;

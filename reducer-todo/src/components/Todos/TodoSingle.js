import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchSingleTodo from "../../hooks/useFetchSingleTodo";
import TodoItemControls from "./TodoItemControls";
import returnRelativeDueDate from "../../utils/returnRelativeDueDate";

const TodoSingle = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);
  const [message, setMessage] = useState("");

  useFetchSingleTodo(Number(todoId))
    .then(([todo, message]) => {
      setTodo(todo);
      setMessage(message);
    })
    .catch(err => {
      setMessage("Something went wrong...");
      console.error(err);
    });

  return todo ? (
    <div className="todo-single">
      <TodoItemControls todo={todo} />
      <p>
        <span className="label">Item:</span> {todo.item}
      </p>
      <p>
        <span className="label">Created at:</span>{" "}
        {todo.created_at.toLocaleString()}
      </p>
      <p>
        <span className="label">Due:</span>{" "}
        {returnRelativeDueDate(todo.due_at)}
      </p>
      <p>
        <span className="label">Priority:</span> {todo.priority}
      </p>
      <p>
        <span className="label">Completed:</span>{" "}
        {todo.completed ? "True" : "False"}
      </p>
      <p>
        <span className="label">Task ID:</span> {todo.id}
      </p>
      <p>
        <span className="label">UUID:</span> {todo.uuid}
      </p>
      <p>
        <span className="label">Last updated:</span>{" "}
        {todo.updated_at
          ? todo.updated_at.toLocaleString()
          : "Never updated"}
      </p>
    </div>
  ) : (
    <div>{message}</div>
  );
};

export default TodoSingle;

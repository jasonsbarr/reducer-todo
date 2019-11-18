import React from "react";
import { useParams } from "react-router-dom";
import useFetchSingleTodo from "../../hooks/useFetchSingleTodo";

const TodoSingle = () => {
  const { todoId } = useParams();
  const [todo, message] = useFetchSingleTodo(Number(todoId));

  return todo ? (
    <div className="todo-single">
      <p>
        <span className="label">Item:</span> {todo.item}
      </p>
      <p>
        <span className="label">Created at:</span>{" "}
        {todo.created_at.toLocaleString()}
      </p>
      <p>
        <span className="label">Due:</span>{" "}
        {todo.due_at ? todo.due_at.toLocaleString() : "No due date"}
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

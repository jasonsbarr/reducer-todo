import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import useTodos from "../../hooks/useTodos";
import mapRawTodo from "../../utils/mapRawTodo";

const TodoSingle = () => {
  const { todoId } = useParams();
  const [{ todos }] = useTodos();
  const [todo, setTodo] = useState(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // If todos are already saved in global state, get matching todo
    todos && todos.length
      ? new Promise((resolve, reject) => {
          resolve(
            todos.filter(sTodo => sTodo.id === Number(todoId))[0],
          );
        })
          .then(todo => setTodo(todo))
          .catch(err => {
            setMessage(
              "Something went wrong. Try again in a minute.",
            );
            console.error(err);
          })
      : // Otherwise fetch matching todo from API
        Axios.get(`http://localhost:4000/todos/${todoId}`)
          .then(res => {
            setTodo(mapRawTodo(res.data));
          })
          .catch(err => {
            setMessage(
              "Something went wrong. Try again in a minute.",
            );
            console.error(err);
          });
  }, []); // eslint-disable-line
  // why doesn't an empty array work?

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

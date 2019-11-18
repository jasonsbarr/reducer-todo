import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetchSingleTodo from "../../hooks/useFetchSingleTodo";
import useTodos from "../../hooks/useTodos";
import TodoForm from "./TodoForm";

const TodoEdit = () => {
  const url = `http://localhost:4000/todos`;
  const { todoId } = useParams();
  const [, dispatch] = useTodos();
  const history = useHistory();
  const [todo, setTodo] = useState(null);
  const [message, setMessage] = useState("");

  useFetchSingleTodo(Number(todoId))
    .then(([todo, message]) => {
      setTodo(todo);
      setMessage(message);
    })
    .catch(err => {
      setMessage("Something's gone horribly wrong.");
      console.error(err);
    });

  const handleFormSubmit = () => {};

  return (
    <>
      <h1>Edit Todo</h1>
      <div className="form-container">
        {todo ? (
          <TodoForm todo={todo} handleSubmit={handleFormSubmit} />
        ) : (
          <div>{message}</div>
        )}
      </div>
    </>
  );
};

export default TodoEdit;

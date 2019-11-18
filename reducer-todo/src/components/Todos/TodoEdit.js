import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetchSingleTodo from "../../hooks/useFetchSingleTodo";
import useTodos from "../../hooks/useTodos";
import TodoForm from "./TodoForm";

const TodoEdit = () => {
  const url = `http://localhost:4000/todos`;
  const { todoId } = useParams();
  const [, dispatch] = useTodos();
  const history = useHistory();
  const todo = useFetchSingleTodo(Number(todoId));

  const handleFormSubmit = () => {};

  return (
    <>
      <h1>Edit Todo</h1>
      <div className="form-container">
        <TodoForm todo={todo} handleSubmit={handleFormSubmit} />
      </div>
    </>
  );
};

export default TodoEdit;

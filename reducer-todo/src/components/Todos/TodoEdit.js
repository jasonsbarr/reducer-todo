import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetchSingleTodo from "../../hooks/useFetchSingleTodo";
import useTodos from "../../hooks/useTodos";
import TodoForm from "./TodoForm";
import { EDIT_TODO } from "../../actions/todos";
import Axios from "axios";

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

  const handleFormSubmit = event => {
    event.preventDefault();

    const editedTodo = {
      uuid: todo.uuid,
      item: event.target.item.value,
      priority: Number(event.target.priority.value),
      completed: todo.completed,
      due_at: new Date(
        `${event.target.due_at_date.value}T${event.target.due_at_time.value}Z`,
      ),
      created_at: todo.created_at,
      updated_at: new Date(Date.now()),
      id: todo.id,
    };

    dispatch({ type: EDIT_TODO, payload: editedTodo });

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(editedTodo),
      url: `${url}/${todo.id}`,
    };

    Axios(options)
      .then(res => {
        history.push("/");
      })
      .catch(err => console.error(err));
  };

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

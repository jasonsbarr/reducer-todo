import React from "react";
import uuidv4 from "uuid/v4";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { ADD_TODO } from "../../actions/todos";
import useTodos from "../../hooks/useTodos";
import TodoForm from "./TodoForm";

const TodoAdd = () => {
  const url = `http://localhost:4000/todos`;
  const [, dispatch] = useTodos();
  const history = useHistory();
  const handleFormSubmit = event => {
    event.preventDefault();

    const newTodo = {
      uuid: uuidv4(),
      item: event.target.item.value,
      priority: Number(event.target.priority.value),
      completed: false,
      due_at: new Date(
        `${event.target.due_at_date.value}T${event.target.due_at_time.value}Z`,
      ),
      created_at: new Date(Date.now()),
      updated_at: null,
    };

    dispatch({ type: ADD_TODO, payload: newTodo });

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(newTodo),
      url,
    };

    Axios(options)
      .then(res => {
        history.push("/");
      })
      .catch(error => console.log(error));
  };
  return (
    <>
      <h1>Add Todo</h1>
      <div className="form-container">
        <TodoForm handleSubmit={handleFormSubmit} />
      </div>
    </>
  );
};

export default TodoAdd;

import React, { useContext } from "react";
import uuidv4 from "uuid/v4";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import TodoContext from "../../contexts/TodoContext";
import TodoForm from "./TodoForm";

const TodoAdd = () => {
  const url = `http://localhost:4000/todos`;
  const { addTodo } = useContext(TodoContext);
  const history = useHistory();
  const handleFormSubmit = event => {
    event.preventDefault();

    const newTodo = {
      uuid: uuidv4(),
      item: event.target.item.value,
      priority: event.target.priority.value,
      completed: false,
      due_at: new Date(
        `${event.target.due_at_date.value}T${event.target.due_at_time.value}Z`,
      ),
      created_at: new Date(Date.now()),
      updated_at: null,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(newTodo),
      url,
    };

    Axios(options)
      .then(res => {
        addTodo(res.data);
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

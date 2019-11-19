import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { DELETE_TODO, EDIT_TODO } from "../../actions/todos";
import useTodos from "../../hooks/useTodos";

const TodoItemControls = ({ todo }) => {
  const apiUrl = `http://localhost:4000/todos`;
  const history = useHistory();
  const [, dispatch] = useTodos();

  const handleCompleteTodo = () => {
    const changed = {
      ...todo,
      completed: !todo.completed,
      updated_at: new Date(Date.now()),
    };

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(changed),
      url: `${apiUrl}/${todo.id}`,
    };

    dispatch({ type: EDIT_TODO, payload: changed });

    Axios(options).catch(err => console.error(err));
  };

  const handleEditTodo = () => {
    history.push(`/todo/${todo.id}/edit`);
  };

  const handleDeleteTodo = () => {
    dispatch({ type: DELETE_TODO, payload: todo.id });

    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      url: `${apiUrl}/${todo.id}`,
    };

    Axios(options).catch(err => console.error(err));
  };

  return (
    <div className="todo-item-controls">
      <button onClick={handleCompleteTodo}>
        {todo.completed ? "⍻" : "✓"}
      </button>
      <button onClick={handleEditTodo}>🖉</button>
      <button id={`delete-${todo.id}`} onClick={handleDeleteTodo}>
        ×
      </button>
    </div>
  );
};

export default TodoItemControls;

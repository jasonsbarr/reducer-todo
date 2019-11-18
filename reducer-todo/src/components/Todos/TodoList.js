import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  SET_TODOS,
  TOGGLE_TODO_COMPLETE,
  CLEAR_COMPLETED_TODOS,
  CLEAR_ALL_TODOS,
  DELETE_TODO,
} from "../../actions/todos";
import useTodos from "../../hooks/useTodos";
import { TodoItem } from ".";
import TodoListControls from "./TodoListControls";

const TodoList = ({ todos }) => {
  const apiUrl = `http://localhost:4000/todos`;

  // Initialize reducer w/ initialState
  const [state, dispatch] = useTodos();
  const [message, setMessage] = useState("Loading...");

  const handleCompleteTodo = todo => {
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

    dispatch({ type: TOGGLE_TODO_COMPLETE, payload: todo });

    Axios(options).catch(err => console.error(err));
  };

  const handleDeleteTodo = todo => {
    dispatch({ type: DELETE_TODO, payload: todo.id });

    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      url: `${apiUrl}/${todo.id}`,
    };

    Axios(options).catch(err => console.error(err));
  };

  const handleClearCompletedTodos = () =>
    dispatch({ type: CLEAR_COMPLETED_TODOS });

  // Initial fetch todos, dispatch to set state
  useEffect(() => {
    dispatch({ type: CLEAR_ALL_TODOS });
    Axios.get(apiUrl)
      .then(res =>
        dispatch({
          type: SET_TODOS,
          payload: res.data,
        }),
      )
      .catch(err =>
        setMessage("Something went wrong. Please try again later."),
      );
  }, [apiUrl, dispatch]);

  return (
    <>
      <h1>Todo List</h1>
      {state.todos && state.todos.length ? (
        <>
          <TodoListControls
            onClearCompleted={handleClearCompletedTodos}
          />
          <ul>
            {state.todos.map(todo => (
              <TodoItem
                onCompleteTodo={handleCompleteTodo}
                onDeleteTodo={handleDeleteTodo}
                key={todo.uuid}
                todo={todo}
              />
            ))}
          </ul>
        </>
      ) : (
        <div>{message}</div>
      )}
    </>
  );
};

export default TodoList;

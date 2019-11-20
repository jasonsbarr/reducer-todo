import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  SET_TODOS,
  CLEAR_COMPLETED_TODOS,
  CLEAR_ALL_TODOS,
} from "../../actions/todos";
import useTodos from "../../hooks/useTodos";
import { TodoItem } from ".";
import TodoListControls from "./TodoListControls";
import mapRawTodo from "../../utils/mapRawTodo";

const TodoList = ({ todos }) => {
  const apiUrl = `http://localhost:4000/todos`;

  // Initialize reducer w/ initialState
  const [state, dispatch] = useTodos();
  const [message, setMessage] = useState("Loading...");

  const handleClearCompletedTodos = () =>
    dispatch({ type: CLEAR_COMPLETED_TODOS });

  // Fetch todos, dispatch to set state
  useEffect(() => {
    // Keeps from accidentally doubling list in state
    dispatch({ type: CLEAR_ALL_TODOS });
    Axios.get(apiUrl)
      .then(res => {
        const todos = res.data.map(todo => mapRawTodo(todo));
        dispatch({
          type: SET_TODOS,
          payload: todos,
        });
      })
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
              <TodoItem key={todo.uuid} todo={todo} />
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

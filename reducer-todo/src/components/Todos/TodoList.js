import React, { useEffect, useReducer } from "react";
import Axios from "axios";
import { SET_TODOS } from "../../actions/todos";
import reducer from "../../reducers/todos";
import { TodoItem } from ".";

const TodoList = ({ todos }) => {
  // Set up initial state
  const initialState = {
    todos: [],
    apiUrl: `http://localhost:4000/todos`,
  };

  // Initialize reducer w/ initialState
  const [state, dispatch] = useReducer(reducer, initialState);

  // Initial fetch todos, dispatch to set state
  useEffect(() => {
    Axios.get(state.apiUrl)
      .then(res =>
        dispatch({
          type: SET_TODOS,
          payload: res.data,
        }),
      )
      .catch(err => console.error(err));
  }, [state.apiUrl]);

  return (
    <>
      <h1>Todo List</h1>
      {state.todos.length ? (
        <ul>
          {state.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default TodoList;

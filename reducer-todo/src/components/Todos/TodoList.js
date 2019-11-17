import React, { useEffect, useReducer } from "react";
import Axios from "axios";
import { SET_TODOS, TOGGLE_TODO_COMPLETE } from "../../actions/todos";
import reducer from "../../reducers/todos";
import { TodoItem } from ".";

const TodoList = ({ todos }) => {
  const apiUrl = `http://localhost:4000/todos`;
  // Set up initial state
  const initialState = {
    todos: [],
  };

  // Initialize reducer w/ initialState
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCompleteTodo = todo => {
    const changed = { ...todo, completed: !todo.completed };
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(changed),
      url: `${apiUrl}/${todo.id}`,
    };

    dispatch({ type: TOGGLE_TODO_COMPLETE, payload: todo });

    Axios(options)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  // Initial fetch todos, dispatch to set state
  useEffect(() => {
    Axios.get(apiUrl)
      .then(res =>
        dispatch({
          type: SET_TODOS,
          payload: res.data,
        }),
      )
      .catch(err => console.error(err));
  }, [apiUrl]);

  return (
    <>
      <h1>Todo List</h1>
      {state.todos.length ? (
        <ul>
          {state.todos.map(todo => (
            <TodoItem
              onCompleteTodo={handleCompleteTodo}
              key={todo.uuid}
              todo={todo}
            />
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default TodoList;

import React, { useReducer } from "react";
import { TodoList } from "./Todos";

const App = () => {
  // Set up initial state
  const initialState = {
    app: "viewTodos",
    todos: [
      {
        item: "Learn about reducers",
        completed: false,
        id: "todo-1",
      },
      {
        item: "Learn more about reducers",
        completed: false,
        id: "todo-2",
      },
      {
        item: "Learn everything there is to know about reducers",
        completed: false,
        id: "todo-3",
      },
    ],
  };

  // Initialize reducer w/ initialState
  const reducer = () => {};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Todo form */}
      <h2>Todo List</h2>
      <TodoList todos={state.todos} />
    </div>
  );
};

export default App;

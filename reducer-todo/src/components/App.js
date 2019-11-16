import React, { useReducer } from "react";

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
  const [state, dispatch] = useReducer(initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Todo form */}
      <h2>Todo List</h2>
      {/* Todo list */}
    </div>
  );
};

export default App;

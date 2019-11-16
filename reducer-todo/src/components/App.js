import React, { useReducer } from "react";

const App = () => {
  // Set up initial state
  const initialState = {
    app: "viewTodos",
    todos: [],
  };

  // Initialize reducer w/ initialState
  const [state, dispatch] = useReducer(initialState);

  return (
    <div className="App">
      {/* Todo form */}
      {/* Todo list */}
      App
    </div>
  );
};

export default App;

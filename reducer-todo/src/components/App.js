import React, { useReducer } from "react";
import { Route } from "react-router-dom";
import TodoContext from "../contexts/TodoContext";
import reducer from "../reducers/todos";
import { TodoList, TodoAdd } from "./Todos";
import Header from "./Header";

const App = () => {
  const [todo, dispatch] = useReducer(reducer, {});

  return (
    <div className="App">
      <Header />
      {/* App controls:
      Form w/ submit
      Filter: all, open, done
      Filter all, tag
      Clear done
      Order by: alpha, created, due, priority
    */}
      <Route exact path="/" component={TodoList} />
      <TodoContext.Provider value={todo}>
        {/* TodoItem */}
        {/* TodoEdit */}
        <Route path="/todo/add" component={TodoAdd} />
      </TodoContext.Provider>
    </div>
  );
};

export default App;

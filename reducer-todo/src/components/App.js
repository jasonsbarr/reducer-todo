import React from "react";
import { Route } from "react-router-dom";
import { TodoList, TodoAdd } from "./Todos";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={TodoList} />
      <Route path="todo-add" component={TodoAdd} />
      {/* App controls:
        Form w/ submit
        Filter: all, open, done
        Filter all, tag
        Clear done
        Order by: alpha, created, due, priority
       */}
    </div>
  );
};

export default App;

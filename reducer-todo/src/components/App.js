import React, { useReducer } from "react";
import { Route } from "react-router-dom";
import reducer from "../reducers/todos";
import TodosContext from "../contexts/TodosContext";
import Header from "./Header";
import { TodoList, TodoAdd, TodoSingle } from "./Todos";

const App = () => {
  return (
    <TodosContext.Provider value={useReducer(reducer, { todos: [] })}>
      <div className="App">
        <Header />
        <Route exact path="/" component={TodoList} />
        <Route path="/todo/:todoId" component={TodoSingle} />
        {/* TodoEdit */}
        <Route path="/todo/add" component={TodoAdd} />
      </div>
    </TodosContext.Provider>
  );
};

export default App;

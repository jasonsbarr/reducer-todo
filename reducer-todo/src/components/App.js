import React, { useReducer } from "react";
import { Route } from "react-router-dom";
import reducer from "../reducers/todos";
import TodosContext from "../contexts/TodosContext";
import Header from "./Header";
import { TodoList, TodoAdd, TodoSingle } from "./Todos";
import TodoEdit from "./Todos/TodoEdit";

const App = () => {
  return (
    <TodosContext.Provider value={useReducer(reducer, { todos: [] })}>
      <div className="App">
        <Header />
        <Route exact path="/" component={TodoList} />
        <Route exact path="/todo/:todoId" component={TodoSingle} />
        <Route path="/todo/:todoId/edit" component={TodoEdit} />
        <Route path="/todo/add" component={TodoAdd} />
      </div>
    </TodosContext.Provider>
  );
};

export default App;

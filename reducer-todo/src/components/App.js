import React, { useReducer } from "react";
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/todo/add" component={TodoAdd} />
          <Route exact path="/todo/:todoId" component={TodoSingle} />
          <Route path="/todo/:todoId/edit" component={TodoEdit} />
        </Switch>
      </div>
    </TodosContext.Provider>
  );
};

export default App;

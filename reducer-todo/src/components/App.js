import React, { useReducer } from "react";
import { Route } from "react-router-dom";
import TodoContext from "../contexts/TodoContext";
import reducer from "../reducers/todo";
import { TodoList, TodoAdd } from "./Todos";
import Header from "./Header";
import { GET_TODO, SET_TODO } from "../actions/todos";

const App = () => {
  const [todo, dispatch] = useReducer(reducer, {});

  const getTodo = id => dispatch({ type: GET_TODO, payload: id });

  const addTodo = todo => dispatch({ type: SET_TODO, payload: todo });

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
      <TodoContext.Provider value={{ todo, getTodo, addTodo }}>
        {/* TodoItem */}
        {/* TodoEdit */}
        <Route path="/todo/add" component={TodoAdd} />
      </TodoContext.Provider>
    </div>
  );
};

export default App;

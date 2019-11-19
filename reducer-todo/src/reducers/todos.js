import makeReducer from "./utils/makeReducer";
import setState from "./utils/setState";

const setTodos = setState("todos");

// Multiple todos functions

const GET_TODOS = (state, action) => state.todos;

const SET_TODOS = (state, { payload }) => {
  const todos = [...state.todos, ...payload];
  return setTodos(state, todos);
};

const CLEAR_COMPLETED_TODOS = (state, action) => {
  const cleared = state.todos.filter(todo => !todo.completed);
  return setTodos(state, cleared);
};

const CLEAR_ALL_TODOS = () => ({ todos: [] });

// Individual todo functions

const ADD_TODO = (state, { payload: todo }) => {
  const todos = [...state.todos, todo];
  return setTodos(state, todos);
};

const GET_TODO = (state, { payload: id }) => {
  return state.todos.filter(todo => Number(id) === Number(todo.id));
};

const SET_TODO = (state, { payload: todo }) => {
  const todos = [todo];
  return setTodos(state, todos);
};

const TOGGLE_TODO_COMPLETE = (state, { payload: todo }) => {
  const todos = state.todos.map(sTodo =>
    sTodo.id === todo.id
      ? { ...todo, completed: !todo.completed }
      : todo,
  );

  return setTodos(state, todos);
};

const EDIT_TODO = (state, { payload: todo }) => {
  const todos = state.todos.map(sTodo =>
    Number(sTodo.id) === Number(todo.id) ? todo : sTodo,
  );

  return setTodos(state, todos);
};

const DELETE_TODO = (state, { payload: id }) => {
  const todos = state.todos.filter(todo => todo.id !== id);
  return setTodos(state, todos);
};

export default makeReducer(
  {
    GET_TODOS,
    SET_TODOS,
    CLEAR_COMPLETED_TODOS,
    CLEAR_ALL_TODOS,
    ADD_TODO,
    GET_TODO,
    SET_TODO,
    TOGGLE_TODO_COMPLETE,
    EDIT_TODO,
    DELETE_TODO,
  },
  { todos: [] },
);

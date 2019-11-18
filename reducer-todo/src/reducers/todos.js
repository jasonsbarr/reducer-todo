import makeReducer from "./utils/makeReducer";
import setState from "./utils/setState";

const setTodos = setState("todos");

// Multiple todos functions

const GET_TODOS = (state, action) => state.todos;

const SET_TODOS = (state, { payload }) => {
  const todos = [...state, ...payload];
  return setTodos(state, todos);
};

const CLEAR_COMPLETED_TODOS = (state, action) => {
  const cleared = state.filter(todo => !todo.completed);
  return setTodos(state, cleared);
};

// Individual todo functions

const ADD_TODO = (state, { payload }) => {
  const todos = [...state, payload];
  return setTodos(state, todos);
};

const GET_TODO = (state, { payload: id }) => {
  return state.filter(todo => Number(id) === Number(todo.id));
};

const TOGGLE_TODO_COMPLETE = (state, { payload }) => {
  const todos = state.map(todo =>
    todo.id === payload.id
      ? { ...todo, completed: !payload.completed }
      : todo,
  );

  return setTodos(state, todos);
};

export default makeReducer(
  {
    GET_TODOS,
    SET_TODOS,
    CLEAR_COMPLETED_TODOS,
    ADD_TODO,
    GET_TODO,
    TOGGLE_TODO_COMPLETE,
  },
  { todos: [] },
);

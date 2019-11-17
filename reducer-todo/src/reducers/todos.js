import makeReducer from "./utils/makeReducer";
import setState from "./utils/setState";

const setTodos = setState("todos");

const GET_TODOS = (state, action) => state.todos;

const SET_TODOS = (state, { payload }) => {
  const todos = [...state.todos, ...payload];
  return setTodos(state, todos);
};

const TOGGLE_TODO_COMPLETE = (state, { payload }) => {
  const todos = state.todos.map(todo =>
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
    TOGGLE_TODO_COMPLETE,
  },
  { todos: [] },
);

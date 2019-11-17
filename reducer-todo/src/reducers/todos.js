import makeReducer from "./utils/makeReducer";
import setState from "./utils/setState";

const setTodos = setState("todos");
/*
 * todo interface
 * todo = {
 *  item: String
 *  completed: Bool
 *  id: String
 *  created_at: Date
 *  due: Date/null
 *  Priority: Int
 * }
 */

const GET_TODOS = (state, action) => state.todos;

const SET_TODOS = (state, { payload }) => {
  const todos = [...state.todos, ...payload];
  return setTodos(state, todos);
};

const GET_TODO = (state, { payload: id }) => {
  return state.todos.find(todoF => Number(id) === Number(todoF.id));
};

const ADD_TODO = (state, { payload }) => {
  const todos = [...state.todos, payload];
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
    GET_TODO,
    ADD_TODO,
    TOGGLE_TODO_COMPLETE,
  },
  { todos: [] },
);

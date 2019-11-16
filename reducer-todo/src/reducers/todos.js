import makeReducer from "./utils/makeReducer";
import setState from "./utils/setState";

const setTodos = setState("todos");
/*
 * todo interface
 * todo = {
 *  item: String
 *  completed: Bool
 *  id: String
 * }
 */

const GET_TODOS = (state, action) => state.todos;

const ADD_TODO = (state, action) => {
  const todos = [...state.todos, action.payload];
  return setTodos(state, todos);
};

export default makeReducer(
  {
    GET_TODOS,
    ADD_TODO,
  },
  { todos: [] },
);

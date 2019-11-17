import makeReducer from "./utils/makeReducer";
import setState from "./utils/setState";

const setTodo = setState("todo");

const GET_TODO = (state, { payload: id }) => {
  return state;
};

const SET_TODO = (state, { payload }) => {
  return setTodo(state, payload);
};

const CLEAR_TODO = () => ({});

export default makeReducer({
  GET_TODO,
  SET_TODO,
  CLEAR_TODO,
});

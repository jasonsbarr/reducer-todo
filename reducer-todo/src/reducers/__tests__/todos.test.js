import reducer from "../todos";
import { ADD_TODO, GET_TODOS } from "../../actions/todos";

describe("Todos reducer", () => {
  const todo1 = {
    item: "Learn all about reducers",
    completed: false,
    id: "todo-1",
  };
  const todo2 = {
    item: "Learn even more about reducers",
    completed: false,
    id: "todo-2",
  };
  const todo3 = {
    item: "Learn everything there is to know about reducers",
    completed: false,
    id: "todo-3",
  };
  let state;

  test("ADD_TODO should add item to state.todos", () => {
    const action1 = {
      type: ADD_TODO,
      payload: todo1,
    };
    const action2 = {
      type: ADD_TODO,
      payload: todo2,
    };
    const action3 = {
      type: ADD_TODO,
      payload: todo3,
    };

    state = reducer({ todos: [] }, action1);
    expect(state).toEqual({ todos: [todo1] });

    state = reducer(state, action2);
    expect(state).toEqual({ todos: [todo1, todo2] });

    state = reducer(state, action3);
    expect(state).toEqual({ todos: [todo1, todo2, todo3] });
  });

  test("GET_TODOS should retrieve all items from state.todos", () => {
    const todos = reducer(state, { type: GET_TODOS });
    expect(todos).toEqual([todo1, todo2, todo3]);
  });
});

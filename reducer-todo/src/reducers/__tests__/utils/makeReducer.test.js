import makeReducer from "../../utils/makeReducer";
import setState from "../../utils/setState";

describe("makeReducer composes reducers by passing in handlers and the old state object", () => {
  const initialState = { names: [] };
  const setNames = setState("names");
  const handlers = {
    ADD_NAME: (state, action) => {
      const names = [...state.names, action.payload];
      return setNames(state, names);
    },
    DELETE_NAME: (state, action) => {
      const names = state.names.filter(
        sName => action.payload !== sName,
      );
      return setNames(state, names);
    },
  };
  const nameReducer = makeReducer(handlers, initialState);
  let state = initialState;

  test("should return function when partially applied", () => {
    expect(nameReducer instanceof Function).toBe(true);
  });

  test("ADD_NAME should add names to state.names", () => {
    const action1 = {
      type: "ADD_NAME",
      payload: "John Doe",
    };
    const action2 = {
      type: "ADD_NAME",
      payload: "Jane Doe",
    };
    const action3 = {
      type: "ADD_NAME",
      payload: "Fi Doe",
    };
    state = nameReducer(state, action1);
    expect(state).toEqual({ names: ["John Doe"] });
    state = nameReducer(state, action2);
    expect(state).toEqual({ names: ["John Doe", "Jane Doe"] });
    state = nameReducer(state, action3);
    expect(state).toEqual({
      names: ["John Doe", "Jane Doe", "Fi Doe"],
    });
  });

  test("DELETE_NAME should remove name from state.names", () => {
    const action = {
      type: "DELETE_NAME",
      payload: "John Doe",
    };
    state = nameReducer(state, action);

    expect(state).toEqual({ names: ["Jane Doe", "Fi Doe"] });
  });

  test("Names not in state.names should not result in any changes", () => {
    const action1 = {
      type: "EDIT_NAME",
      payload: "Jimmy Johnson",
    };
    const action2 = {
      type: "DELETE_NAME",
      payload: "Jimmy Johnson",
    };
    state = nameReducer(state, action1);
    state = nameReducer(state, action2);

    expect(state).toEqual({ names: ["Jane Doe", "Fi Doe"] });
  });
});

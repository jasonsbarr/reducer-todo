import setState from "../utils/setState";

describe("Set state util function", () => {
  const oldState = {
    name: "Jimmy",
    age: 32,
  };
  test("should set a new property on state if the payload's key doesn't exist", () => {
    const action = { type: "UPDATE_JOB", payload: "hustler" };
    const newState = setState("job")(oldState, action.payload);

    expect(newState).toEqual({ ...oldState, job: "hustler" });
  });

  test("should replace a property's value if the key does exist", () => {
    const action = { type: "UPDATE_NAME", payload: "James Johnson" };
    const newState = setState("name")(oldState, action.payload);

    expect(newState).toEqual({ name: "James Johnson", age: 32 });
  });
});

describe("Partially applied setState function returns state updater for key", () => {
  test("should return a function that updates the name", () => {
    const nameUpdater = setState("name");
    const oldState = {
      name: "Jimmy",
      age: 32,
      job: "hustler",
    };
    const newState = nameUpdater(oldState, "James Johnson");

    expect(nameUpdater instanceof Function).toBe(true);
    expect(newState).toEqual({
      name: "James Johnson",
      age: 32,
      job: "hustler",
    });
  });
});

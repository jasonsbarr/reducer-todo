import { executeOrReturn } from "../";

describe("Execute or return util", () => {
  test("should return value if not a function", () => {
    const actual = executeOrReturn({ animal: "Cat" });

    expect(actual).toEqual({ animal: "Cat" });
  });

  test("should execute a function value passed to it", () => {
    const funcValue = () => "This is a function";
    const actual = executeOrReturn(funcValue);

    expect(actual).toMatch("This is a function");
  });
});

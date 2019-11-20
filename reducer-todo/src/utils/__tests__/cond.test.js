import { cond } from "../";

describe("cond function (takes place of if or switch statements)", () => {
  const options = {
    key1: "hello",
    key2: "John Smith",
    key3: { animal: "Cat", fed: true },
  };

  const noKey = "Key doesn't exist!";

  test("should return correct value when key matches", () => {
    expect(cond(options)(noKey)("key1")).toMatch("hello");
    expect(cond(options)(noKey)("key2")).toMatch("John Smith");
    expect(cond(options)(noKey)("key3")).toEqual({
      animal: "Cat",
      fed: true,
    });
  });

  test("should return default value when no key matches", () => {
    expect(cond(options)(noKey)("doesn't exist")).toMatch(
      "Key doesn't exist!",
    );
  });
});

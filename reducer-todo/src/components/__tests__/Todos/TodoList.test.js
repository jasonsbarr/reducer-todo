import React from "react";
import { render, cleanup } from "@testing-library/react";
import { TodoList } from "../../Todos";

afterEach(cleanup);

const todos = [
  {
    item: "Learn about reducers",
    completed: false,
    id: "todo-1",
  },
  {
    item: "Learn more about reducers",
    completed: false,
    id: "todo-2",
  },
  {
    item: "Learn everything there is to know about reducers",
    completed: false,
    id: "todo-3",
  },
];

describe("TodoList component", () => {
  const { container } = render(<TodoList todos={todos} />);
  const todoList = container.firstChild;

  test("should render a TodoList with todos passed in from above", () => {
    expect(todoList.children.length).toEqual(todos.length);
    expect(todoList.textContent).toMatch("Learn about reducers");
    expect(todoList.textContent).toMatch("Learn more about reducers");
    expect(todoList.textContent).toMatch(
      "Learn everything there is to know about reducers",
    );
    expect(todoList).toMatchSnapshot();
  });
});

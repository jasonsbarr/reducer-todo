import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TodoItem } from "../../Todos";

afterEach(cleanup);

const todos = [
  {
    item: "Do something",
    completed: false,
    id: "todo-1",
  },
  {
    item: "Do something else",
    completed: true,
    id: "todo-2",
  },
];

describe("TodoItem component tests", () => {
  test("should render a todo item", () => {
    const { container } = render(
      <BrowserRouter>
        <TodoItem todo={todos[0]} />
      </BrowserRouter>,
    );

    const todoItem = container.firstChild;

    expect(todoItem.textContent).toMatch("Do something");
    expect(todoItem).toMatchSnapshot();
  });

  test("should have CSS class of completed if todo is completed", () => {
    const { container } = render(
      <BrowserRouter>
        <TodoItem todo={todos[1]} />
      </BrowserRouter>,
    );

    const todoItem = container.firstChild;

    expect(todoItem.textContent).toMatch("Do something else");
    expect(todoItem.classList.contains("completed")).toBe(true);
  });
});

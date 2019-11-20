import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const defaultValues = {
  item: "",
  due_at_date: "",
  due_at_time: "",
  priority: 4,
};

const TodoForm = ({ handleSubmit, todo = undefined }) => {
  const { pathname } = useLocation();

  const formValues = {
    item: todo ? todo.item : defaultValues.item,
    due_at_date:
      todo && todo.due_at
        ? todo.due_at.toISOString().split("T")[0]
        : defaultValues.due_at_date,
    due_at_time:
      todo && todo.due_at
        ? todo.due_at
            .toISOString()
            .split("T")[1]
            .split(".")[0]
        : defaultValues.due_at_time,
    priority: todo ? todo.priority : defaultValues.priority,
  };

  const [formState, setFormState] = useState(formValues);

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">
        Todo item (required):
        <input
          type="text"
          name="item"
          id="item"
          value={formState.item}
          placeholder="Todo item goes here..."
          onChange={handleChange}
        />
      </label>
      <label htmlFor="due_at">
        Due date:
        <span id="due_at">
          <input
            type="date"
            name="due_at_date"
            id="due_at_date"
            value={formState.due_at_date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="due_at_time"
            id="due_at_time"
            value={formState.due_at_time}
            onChange={handleChange}
          />
        </span>
      </label>
      <label htmlFor="priority">
        Priority:
        <select
          name="priority"
          id="priority"
          value={formState.priority}
          selected={4}
          onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </label>
      <button type="submit">
        {pathname === "/todo/add" ? "Add Todo" : "Edit Todo"}
      </button>
    </form>
  );
};

export default TodoForm;

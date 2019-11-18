import { useState, useEffect } from "react";
import Axios from "axios";
import useTodos from "./useTodos";
import mapRawTodo from "../utils/mapRawTodo";

const useFetchSingleTodo = todoId => {
  const [{ todos }] = useTodos();
  const [todo, setTodo] = useState(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // If todos are already saved in global state, get matching todo
    todos && todos.length
      ? new Promise((resolve, reject) => {
          resolve(todos.filter(sTodo => sTodo.id === todoId)[0]);
        })
          .then(todo => setTodo(todo))
          .catch(err => {
            setMessage(
              "Something went wrong. Try again in a minute.",
            );
            console.error(err);
          })
      : // Otherwise fetch matching todo from API
        Axios.get(`http://localhost:4000/todos/${todoId}`)
          .then(res => {
            setTodo(mapRawTodo(res.data));
          })
          .catch(err => {
            setMessage(
              "Something went wrong. Try again in a minute.",
            );
            console.error(err);
          });
  }, []); // eslint-disable-line
  // why doesn't an empty array work?

  return [todo, message];
};

export default useFetchSingleTodo;

import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

const useTodos = () => useContext(TodosContext);

export default useTodos;

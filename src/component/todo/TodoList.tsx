import React from "react";
import { TodoModal } from "../../modal/todo";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: TodoModal[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>; // copied from setTodos state
}
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((allTodo) => (
        <SingleTodo
          todoSingleObj={allTodo}
          key={allTodo.id}
          setTodos={setTodos}
          todoArrayOfObj={todos}
        />
        // <li>{allTodo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;

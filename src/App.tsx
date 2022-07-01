import React, { useState } from "react";
import "./assets/scss/styles.scss";
import InputField from "./component/todo/InputField";
import { TodoModal } from "./modal/todo";
import TodoList from "./component/todo/TodoList";
function App() {
  const [todotext, setTodoText] = useState<string>("");
  // console.log(todo); // going to print what is entered in textbox

  // created another state of type TodoModal array - to added all todo(s) to this state
  const [todos, setTodos] = useState<TodoModal[]>([]);

  // prepared a function
  // instead of using "e:any" always use "e:React.FormEvent"
  const handleAdd = (e: React.FormEvent) => {
    // because page was geting refreshed on clicking submit button
    e.preventDefault();

    // check if textbox is not blank while submiting
    if (todotext) {
      // to get random id we assigned current date and isDone is nothing in starting so simple passed "false"
      //id, todo, isDone is getting through TodoModal
      setTodos([...todos, { id: Date.now(), todo: todotext, isDone: false }]);

      // make field blank after every submit
      setTodoText("");
    }
  };

  return (
    <div className="container">
      <InputField
        todotext={todotext}
        setTodoText={setTodoText}
        handleAdd={handleAdd}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

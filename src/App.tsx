import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputField from "./component/todo/InputField";
import { TodoModal } from "./modal/todo";
import TodoList from "./component/todo/TodoList";
// import InputField from "./component/InputField";
// import Display from "./component/Display";
function App() {
  // const [name, setName] = useState<string>("");
  // const [foodList, setFoodList] = useState<string[]>([]);
  // const [foodListGreen, setFoodListGreen] = useState<string[]>([]);
  // const [checked, setChecked] = useState(false);

  // function handleChange(e: any) {
  //   setName(e.target.value);
  // }
  // let a = foodList;
  // const handleClick = () => {
  //   {
  //     checked
  //       ? setFoodList((prevNames) => [...prevNames, name])
  //       : setFoodListGreen((prevNames) => [...prevNames, name]);
  //   }
  // };

  // const isChecked = (e: any) => {
  //   setChecked(!checked);
  // };

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
      //console.log(todos);
    }
  };

  return (
    // <div>
    //   <InputField
    //     handelInput={handleChange}
    //     name={name}
    //     handelBtn={handleClick}
    //     handelChkbox={isChecked}
    //   />

    //   <div style={{ display: "table", width: "100%" }}>
    //     <div style={{ border: "solid 1px green" }}>
    //       <Display list={foodListGreen} />
    //     </div>
    //     <div style={{ border: "solid 1px red" }}>
    //       <Display list={foodList} />
    //     </div>
    //   </div>
    // </div>
    <>
      <InputField
        todotext={todotext}
        setTodoText={setTodoText}
        handleAdd={handleAdd}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

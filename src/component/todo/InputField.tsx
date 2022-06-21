import React from "react";

interface Props {
  todotext: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // because its not going to return any thing so "void"
  // we used "e: React.FormEvent" because same we used in function prepared in App.tsx
}
// do it like this or like next line - both are same thing
//const InputField: React.FC<Props> = ({ todo, setTodo }) => {
const InputField = ({ todotext, setTodoText, handleAdd }: Props) => {
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={todotext}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputField;

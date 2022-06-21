import React, { useState } from "react";
import { TodoModal } from "../../modal/todo";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"; //yarn add react-icons = added react-icons using this command
import { MdDone } from "react-icons/md";

interface Props {
  todoArrayOfObj: TodoModal[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>; // is a function - copied from setTodos state
  todoSingleObj: TodoModal;
}

const SingleTodo = ({ todoSingleObj, todoArrayOfObj, setTodos }: Props) => {
  // State to check edit state(if already in edit mode)
  const [editMode, setEditMode] = useState<boolean>(false);

  //state to store edit value
  const [editTodo, setEditTodo] = useState<string>(todoSingleObj.todo);

  // function to handel done icon // passing id //
  const handleDone = (id: number) => {
    setTodos(
      todoArrayOfObj.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isDone: !todoItem.isDone } // 1st look for isDone(say it is false) in ...todoItem then make it opposit (say true)
          : todoItem
      )
    );
  };

  // function to handel delete icon // passing id //
  const handleDelete = (id: number) => {
    setTodos(todoArrayOfObj.filter((todoItem) => todoItem.id != id));
  };

  return (
    <form>
      {todoSingleObj.isDone ? (
        <s>{todoSingleObj.todo}</s>
      ) : (
        <span>{todoSingleObj.todo}</span>
      )}

      <span>
        <AiFillDelete onClick={() => handleDelete(todoSingleObj.id)} />
      </span>
      <span>
        <AiFillEdit
          onClick={() => {
            if (!editMode && !todoSingleObj.isDone) {
              setEditMode(!editMode);
            }
          }}
        />
      </span>
      <span>
        <MdDone onClick={() => handleDone(todoSingleObj.id)} />
      </span>
    </form>
  );
};

export default SingleTodo;

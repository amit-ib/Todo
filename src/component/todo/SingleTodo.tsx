import React, { useState } from "react";
import { TodoModal } from "../../modal/todo";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"; //yarn add react-icons = added react-icons using this command
import { MdDone } from "react-icons/md";

interface Props {
  todoArrayOfObj: TodoModal[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>; // is a function - copied from setTodos state
  todoSingleObj: TodoModal;
  index: number;
}

const SingleTodo = ({
  todoSingleObj,
  todoArrayOfObj,
  setTodos,
  index,
}: Props) => {
  // State to check edit state(if already in edit mode)
  const [editMode, setEditMode] = useState<boolean>(false);

  //state to store edit value
  const [editTodo, setEditTodo] = useState<string>(todoSingleObj.todo);

  // function to handel done icon // passing id //
  const handleDone = (id: number, index: number) => {
    let filteredTodos = [...todoArrayOfObj];
    if (filteredTodos[index].id === id) {
      filteredTodos[index].isDone = !filteredTodos[index].isDone;
    }
    setTodos(filteredTodos);

    // Same thing acheived through map function
    // setTodos(
    //   todoArrayOfObj.map((todoItem) =>
    //     todoItem.id === id
    //       ? { ...todoItem, isDone: !todoItem.isDone } // first it look for isDone(say it is false) in ...todoItem then make it opposit (say true)
    //       : todoItem
    //   )
    // );
  };

  // function to handel Edit icon // passing id //
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todoArrayOfObj.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, todo: editTodo } : todoItem
      )
    );
    setEditMode(false);
  };

  // function to handel delete icon // passing id //
  const handleDelete = (id: number) => {
    setTodos(todoArrayOfObj.filter((todoItem) => todoItem.id != id));
  };

  return (
    <form onSubmit={(e) => handleEdit(e, todoSingleObj.id)}>
      <div className="list-item">
        <>
          {editMode ? (
            //If in edit mode then display Textbox
            <input
              value={editTodo}
              // onChange is just going to allow to wright in textbox
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : todoSingleObj.isDone ? (
            //Done item with strick out style
            <span className="list-item-text task-done">
              {todoSingleObj.todo}
            </span>
          ) : (
            // Normal list item - "Not Done"
            <span className="list-item-text">{todoSingleObj.todo}</span>
          )}

          <div className="action-icons">
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
              <MdDone onClick={() => handleDone(todoSingleObj.id, index)} />
            </span>
          </div>
        </>
      </div>
    </form>
  );
};

export default SingleTodo;

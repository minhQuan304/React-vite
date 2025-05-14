import TodoNew from "./TodoData";
import TodoData from "./TodoNew";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watch Youtube" },
  ]);
  // const data = {
  //   name: "Thái Minh Quân",
  //   sdt: "0859991285",
  // };
  const addNewTodo = (data) => {
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 10000) + 1;
    } while (todoList.some((item) => item.id === randomId)); // tránh trùng

    const newTodo = {
      id: randomId,
      name: data,
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleDelete = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} todoList={todoList} />
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} handleDelete={handleDelete} />
      ) : (
        <div className="todo-image">
          <img className="logo" src={reactLogo} alt="reactLogo" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;

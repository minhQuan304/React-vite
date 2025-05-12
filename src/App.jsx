import "./components/todo/todo.css";
import "./components/todo/TodoNew";
import "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
const App = () => {
  const data = {
    name: "Thái Minh Quân",
    sdt: "0859991285",
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData data={data} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} alt="reactLogo" />
      </div>
    </div>
  );
};

export default App;

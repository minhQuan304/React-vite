const TodoData = (props) => {
  console.log("check data:", props);
  return (
    <div className="todo-data">
      <div>My name is {props.data.name}</div>
      <div>Learing React</div>
      <div>Watching youtube</div>
    </div>
  );
};

export default TodoData;

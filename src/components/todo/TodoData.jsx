const TodoData = (props) => {
  const { handleDelete } = props;
  return (
    <div className="todo-data">
      {props.todoList.map((item, index) => {
        console.log("...check item:", item, item.id);
        return (
          <div className="todo-delete">
            <div key={item.id}>{item.name}</div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;

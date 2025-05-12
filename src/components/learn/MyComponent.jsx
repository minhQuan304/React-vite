import "./style.css";
const MyComponent = () => {
  const name = "Justin";
  return (
    <>
      <div>Ngành công nghệ thông tin</div>
      <div
        className="name"
        style={{
          borderRadius: "20%",
          backgroundColor: "black",
          display: "inline-block",
        }}
      >
        {name} Minh Quân
      </div>
    </>
  );
};

export { MyComponent };

import "./components/todo/todo.css";
import "./components/todo/TodoNew";
import "./components/todo/TodoData";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

import "./App.css";

import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Header />
      <NewTodo />
      <TodoList />
      <Filters />
    </>
  );
}

export default App;

import Todo from "../Todo/Todo";
import { selectActiveFilter } from "../../store/filter/filter-selectors";
import { selectVisibleTodos } from "../../store/todos/todos-selectors";
import style from "./TodoList.module.css";
import { useAppSelector } from "../../store/hooks";

const TodoList = () => {
  const activeFilter = useAppSelector(selectActiveFilter);
  const todos = useAppSelector((state) =>
    selectVisibleTodos(state, activeFilter)
  );
  return (
    <div className={style.todoListContainer}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

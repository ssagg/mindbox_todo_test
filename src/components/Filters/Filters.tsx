import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { removeTodo } from "../../store/todos/todos-actions";
import { selectAllTodos } from "../../store/todos/todos-selectors";
import { setFilter } from "../../store/filter/filter-actions";
import styles from "./Filters.module.css";

const Filters = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectAllTodos);
  const t = todos.filter((todo) => !todo.completed);

  return (
    <div className={styles.container}>
      <div>{t.length} active items</div>
      <button onClick={() => dispatch(setFilter("all"))}>All</button>
      <button onClick={() => dispatch(setFilter("active"))}>Active</button>
      <button onClick={() => dispatch(setFilter("completed"))}>
        Completed
      </button>
      <button
        onClick={() => {
          dispatch(removeTodo());
        }}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Filters;

import { ITodo } from "../../models/models";
import styles from "./Todo.module.css";
import { toggleTodo } from "../../store/todos/todos-actions";
import { useAppDispatch } from "../../store/hooks";

type TodoProps = {
  todo: ITodo;
};

const Todo = ({ todo }: TodoProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.todoContainer}>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      {todo.completed ? (
        <p className={styles.todoTitle}>{todo.title}</p>
      ) : (
        <p>{todo.title}</p>
      )}
    </div>
  );
};

export default Todo;

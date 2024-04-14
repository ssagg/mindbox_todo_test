import { addTodo } from "../../store/todos/todos-actions";
import styles from "./NewTodo.module.css";
import { useAppDispatch } from "../../store/hooks";
import { useState } from "react";

const NewTodo = () => {
  const dispatch = useAppDispatch();
  const [value, setNewTodoValue] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        // dispatch(addTodo(e.target.title.value));
        dispatch(addTodo(value));
        setNewTodoValue("");
        (e.target as HTMLFormElement).reset();
      }}
    >
      <input
        className={styles.searchInput}
        type='text'
        placeholder='What need to be done?'
        name='title'
        value={value}
        onChange={(e) => setNewTodoValue(e.target.value)}
      />
      <input type='submit' value='Create' style={{ display: "none" }} />
    </form>
  );
};

export default NewTodo;

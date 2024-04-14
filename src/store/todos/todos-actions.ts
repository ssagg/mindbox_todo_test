import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos-const";

import { nanoid } from "nanoid";

interface IRemoveAllTodosAction {
  type: string;
  payload: {
    id?: string;
    title?: string;
    completed?: boolean;
  };
}
export const addTodo = (title: string) => ({
  type: ADD_TODO,
  payload: { title, completed: false, id: nanoid() },
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (): IRemoveAllTodosAction => ({
  type: REMOVE_TODO,
  payload: {},
});

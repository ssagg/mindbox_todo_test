import { RootState } from "..";

export const selectAllTodos = (state: RootState) => state.todos;

export const selectVisibleTodos = (state: RootState, filter?: string) => {
  switch (filter) {
    case "all": {
      return state.todos;
    }
    case "active": {
      return state.todos.filter((todo) => !todo.completed);
    }
    case "completed": {
      return state.todos.filter((todo) => todo.completed);
    }
    default: {
      return state.todos;
    }
  }
};

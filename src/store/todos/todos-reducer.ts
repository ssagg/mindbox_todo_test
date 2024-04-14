import { ITodo } from "../../models/models";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos-const";

// interface TodoState {
//   todos: ITodo[];
// }

// enum ActionTypes {
//   ADD_TODO = "ADD_TODO",
//   TOGGLE_TODO = "TOGGLE_TODO",
//   REMOVE_TODO = "REMOVE_TODO",
// }

interface AddTodoAction {
  type: string;
  payload: {
    id: string;
    title?: string;
    completed?: boolean;
  };
}

export interface ToggleTodoAction {
  type: string;
  payload: {
    id: string;
    title?: string;
    completed?: boolean;
  };
}

export interface RemoveTodoAction {
  type: string;
  payload: { id: string; title?: string; completed?: boolean };
}

type Action = AddTodoAction | ToggleTodoAction | RemoveTodoAction;

const initialState: ITodo[] = [];

export const todos = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, { ...action.payload }];
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    case REMOVE_TODO: {
      return state.filter((todo) => !todo.completed);
    }
    default: {
      return state;
    }
  }
};

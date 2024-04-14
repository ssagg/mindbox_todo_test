import { combineReducers } from "redux";
import { filter } from "./filter/filter-reducer";
import { todos } from "./todos/todos-reducer";

export const rootReducer = combineReducers({
  filter,
  todos,
});

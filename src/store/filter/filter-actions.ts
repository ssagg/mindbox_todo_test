import { FILTER } from "./filter-const";

interface IFilterAction {
  type: string;
  payload: {
    filter: string;
  };
}

export const setFilter = (filter: string): IFilterAction => ({
  type: FILTER,
  payload: { filter },
});

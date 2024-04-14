import { FILTER } from "./filter-const";

interface IFilterAction {
  type: string;
  payload: {
    filter?: string;
    id?: string;
    title?: string;
    completed?: boolean;
  };
}

type Action = IFilterAction;

export const filter = (state = "all", action: Action) => {
  switch (action.type) {
    case FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

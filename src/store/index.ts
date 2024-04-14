import { loadState, saveState } from "./local-storage";

import { createStore } from "redux";
import { rootReducer } from "./root-reducer";

const persistedState = loadState();
export const store = createStore(
  rootReducer,
  persistedState

  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

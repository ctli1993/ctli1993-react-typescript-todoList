import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    reducer: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

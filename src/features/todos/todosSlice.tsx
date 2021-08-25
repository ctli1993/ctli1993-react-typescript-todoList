import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoProps {
  id: string;
  text: string;
  completed: boolean;
}
const initialState = [] as TodoProps[];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    completeTodo: (
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;

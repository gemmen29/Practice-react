import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNew(state, action) {
      state.todos.push(action.payload);
    },
    addMultiple(state, action) {
      state.todos = action.payload;
    },
    toggleCheck(state, action) {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    delete(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    edit(state, action) {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      });
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;

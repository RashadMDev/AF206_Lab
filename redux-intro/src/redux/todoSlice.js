import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      todos: [],
};

const todoSlice = createSlice({
      name: 'todos',
      initialState,
      reducers: {
            addTodo: (state, action) => {
                  state.todos.push({ id: Date.now(), text: action.payload });
            },
            deleteTodo: (state, action) => {
                  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            },
            clearTodos: (state) => {
                  state.todos = [];
            },
      },
});

export const { addTodo, deleteTodo, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;
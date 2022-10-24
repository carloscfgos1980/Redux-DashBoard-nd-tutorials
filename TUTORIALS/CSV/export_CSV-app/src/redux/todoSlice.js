import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        // toggleCompleted: (state, action) => {
        //     let updatedTodos = state.map(todo => {
        //         if (todo.id === action.payload) {
        //             todo.completed = !todo.completed;
        //         }
        //         return todo;
        //     });
        //     state = updatedTodos
        // }
    }
});

export const { toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
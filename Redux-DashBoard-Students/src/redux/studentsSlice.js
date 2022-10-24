import { createSlice } from '@reduxjs/toolkit';
import students from '../components/output';


const studentsSlice = createSlice({
    name: 'students',
    initialState: students,
    reducers: {
    }
});

//export const { toggleCompleted } = todoSlice.actions;

export default studentsSlice.reducer;
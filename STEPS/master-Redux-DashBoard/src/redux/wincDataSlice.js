import { createSlice } from '@reduxjs/toolkit';
import students from '../components/output';


const wincDataSlice = createSlice({
    name: 'winc-data',
    initialState: {
        students: students,
        singleStudent: [],
        chekedStudents: [],
    },
    reducers: {
        addNewStudent: (state, action) => {
            const name = action.payload;
            console.log("action.payload in addNewStudent", name);
            let oneStudent = state.students.filter(student => student.name === name);
            state.singleStudent = oneStudent
        },
        addCheckedStudent: (state, action) => {
            const name = action.payload;
            //console.log("action.payload in addCheckedStudent", name);
            state.chekedStudents.push(name);
        },
        removeUncheckedStudent: (state, action) => {
            const name = action.payload;
            //console.log("action.payload in removeUncheckedStudent", name);
            let removedStudent = state.chekedStudents.filter(student => student !== name);
            console.log("removedStudents", removedStudent)
            state.chekedStudents = removedStudent;
        },
    }
});

export const { addNewStudent, addCheckedStudent, removeUncheckedStudent } = wincDataSlice.actions;

export default wincDataSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice'

export default configureStore({
    reducer: {
        students: studentsReducer,
    }
})
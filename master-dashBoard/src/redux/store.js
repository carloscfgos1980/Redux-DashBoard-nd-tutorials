import { configureStore } from '@reduxjs/toolkit';
import winDataSlice from './wincDataSlice';


export default configureStore({
    reducer: {
        data: winDataSlice,

    }
})
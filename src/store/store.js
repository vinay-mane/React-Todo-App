import { configureStore } from "@reduxjs/toolkit";
import toDoSliceReducer from '../slice/toDoSlice'

export const store = configureStore({reducer:toDoSliceReducer})
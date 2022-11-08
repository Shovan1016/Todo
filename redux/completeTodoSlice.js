import { createSlice } from "@reduxjs/toolkit";

const completeTodoSlice=createSlice({
    name:'completeTodo',
    initialState:{completeTodo:{}},
    reducers:{
        completeTodoData(state,action){
            state.completeTodo = action.payload;
        },
    }
});

export const getcompleteTodo = (state) => state.completeTodo;
export const {completeTodoData}=completeTodoSlice.actions;
export default completeTodoSlice;
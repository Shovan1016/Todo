import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:'todo',
    initialState:{todo:{}},
    reducers:{
        todoData(state,action){
            state.todo = action.payload;
        },
    }
});
export const gettodo = (state) => state.todo;
export const {todoData}=todoSlice.actions;
export default todoSlice;
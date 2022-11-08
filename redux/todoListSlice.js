import { createSlice } from "@reduxjs/toolkit";

const todoListSlice=createSlice({
    name:'todoList',
    initialState:{Items:{}},
    reducers:{
        fetchTodoListData(state,action){
            state.Items = action.payload;
        },
    }
});

export const {fetchTodoListData}=todoListSlice.actions;
export default todoListSlice;
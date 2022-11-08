import { createSlice } from "@reduxjs/toolkit";


const deleteSlice=createSlice({
    name:'delete',
    initialState:{delete:""},
    reducers:{
        deleteData(state,action){
            state.delete = action.payload;
        },
    }
});
export const getdelete = (state) => state.delete;
export const {deleteData}=deleteSlice.actions;
export default deleteSlice;
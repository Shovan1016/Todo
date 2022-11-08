import { createSlice } from "@reduxjs/toolkit";


const emailSlice=createSlice({
    name:'email',
    initialState:{email:""},
    reducers:{
        emailData(state,action){
            state.email = action.payload;
        },
    }
});
export const getemail = (state) => state.email;
export const {emailData}=emailSlice.actions;
export default emailSlice;
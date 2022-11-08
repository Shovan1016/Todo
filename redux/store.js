import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import todoSlice from './todoSlice';
import rootSaga from '../saga/rootSaga'
import createSagaMiddleware from "redux-saga";
// import locationSlice from './locationSlice';
import { createWrapper } from "next-redux-wrapper";
import emailSlice from './emailSlice';
import todoListSlice from './todoListSlice';
import completeTodoSlice from './completeTodoSlice';
import deleteSlice from './deleteSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store=configureStore({
    reducer:{
        todo:todoSlice.reducer,
        email:emailSlice.reducer,
        todoList:todoListSlice.reducer,
        completeTodo:completeTodoSlice.reducer,
        delete:deleteSlice.reducer
    },
    middleware  
})
sagaMiddleware.run(rootSaga)

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);


export default store;
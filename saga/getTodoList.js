import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import {fetchTodoListData} from "../redux/todoListSlice";
import { sagaActions } from "./sagaActions";
// import { useSelector } from "react-redux";
import { select } from 'redux-saga/effects';
import { getemail } from "../redux/emailSlice";


let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};



export function* fetchTodoDataSaga() {
    
  
  let email=yield select(getemail)
  let e=email.email;
  try {
    let result = yield call(() =>
      callAPI({ url:`http://localhost:3004/${e}` })
    );
    yield put(fetchTodoListData(result.data));
  } catch (e) {
    console.log(e)
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}
export default function* waitForFetchTodo() {
    yield takeEvery(sagaActions.FETCH_TODO_SAGA, fetchTodoDataSaga);
  }
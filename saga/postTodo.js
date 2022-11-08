import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "./sagaActions";
import { select } from 'redux-saga/effects';
import {gettodo} from '../redux/todoSlice'
import { getemail } from "../redux/emailSlice";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export function* sendTodoDataSaga() {
  let email=yield select(getemail)
  let e=email.email;
  let note=yield select(gettodo)
  let n=(note.todo)
  // let n="hello"
  try {
    let result = yield call(() =>
      callAPI({ url:`http://localhost:3004/${e}`,method:'POST',data:n })
    );
    // yield put(fetchWeatherData(result.data));
    yield put({ type: "SEND_DATA_SUCCESS" });
  } catch (e) {
    console.log(e)
    yield put({ type: "SEND_DATA_FAILED" });
  }
}
export default function* waitForSendTodo() {
    yield takeEvery(sagaActions.POST_TODO_SAGA, sendTodoDataSaga);
  }
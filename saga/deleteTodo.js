import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "./sagaActions";
import { select } from 'redux-saga/effects';
import {getdelete} from '../redux/deleteSlice'
import { getemail } from "../redux/emailSlice";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export function* deleteTodoDataSaga() {
  let email=yield select(getemail)
  let e=email.email;
  
  let id=yield select(getdelete)
  let i=(id.delete)
  // let n="hello"
  try {
    let result = yield call(() =>
      callAPI({ url:`http://localhost:3004/${e}/${i}`,method:'DELETE'})
    );
    // yield put(fetchWeatherData(result.data));
    yield put({ type: "DELETE_DATA_SUCCESS" });
  } catch (e) {
    console.log(e)
    yield put({ type: "DELETE_DATA_FAILED" });
  }
}
export default function* waitForDeleteTodo() {
    yield takeEvery(sagaActions.DELETE_DATA_SAGA, deleteTodoDataSaga);
  }
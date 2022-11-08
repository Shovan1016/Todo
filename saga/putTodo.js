import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "./sagaActions";
import { select } from 'redux-saga/effects';
import {getcompleteTodo} from '../redux/completeTodoSlice'
import { getemail } from "../redux/emailSlice";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export function* putCompletedDataSaga() {
  let email=yield select(getemail)
  let id=yield select(getcompleteTodo)

  let e=email.email;
  let i=id.completeTodo.id; 

 
  let n=(id.completeTodo)
  // let n="hello"
  try {
    let result = yield call(() =>
      callAPI({ url:`http://localhost:3004/${e}/${i}`,method:'PUT',data:n })
    );
    // yield put(fetchWeatherData(result.data));
    yield put({ type: "PUT_DATA_SUCCESS" });
  } catch (e) {
    console.log(e)
    yield put({ type: "PUT_DATA_FAILED" });
  }
}
export default function* waitForPutTodo() {
    yield takeEvery(sagaActions.PUT_COMPLETE_DATA_SAGA, putCompletedDataSaga);
  }
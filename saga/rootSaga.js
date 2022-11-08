import { all } from "redux-saga/effects";
import  waitForSendTodo  from "./postTodo";
import waitForFetchTodo from "./getTodoList"
import waitForPutTodo from "./putTodo"
import waitForDeleteTodo from "./deleteTodo"

export default function* rootSaga() {
  yield all([waitForSendTodo(),waitForFetchTodo(),waitForPutTodo(),waitForDeleteTodo()]);
}
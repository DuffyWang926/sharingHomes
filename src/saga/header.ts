import { call, put, takeLatest } from 'redux-saga/effects'
import {getUserData} from '../api/header'

function* fetchUser() {
    try {
       const user = yield call(getUserData);
       let test = {
          name:'bbb'
       }
       yield put({type: "logInSuccess", user: test});
    } catch (e) {
      yield put({type: "logInError", user: test});
    }
 }

 function* mySaga() {
    yield takeLatest("header/LOGIN", fetchUser);
  }
let headerSaga = [
    mySaga
]
export default headerSaga;

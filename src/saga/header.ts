import { call, put, takeLatest } from 'redux-saga/effects'
import {getUserData} from '../api/header'
import { createAsyncAction } from 'typesafe-actions';
import { LOGIN , LOGIN_SUCCESS , LOGIN_FAIL } from '../features/header/constants';
const fetchTodosAsync = createAsyncAction(
   LOGIN,
   LOGIN_SUCCESS,
   LOGIN_FAIL
 )<string,{}, Error>();

function* fetchUser(action:ReturnType<typeof fetchTodosAsync.request>) {
    try {
       const {data} = yield call(getUserData(action.payload));
       yield put(fetchTodosAsync.success(data));
    } catch (err) {
      yield put(fetchTodosAsync.failure(err));
    }
 }

 function* mySaga() {
    yield takeLatest(fetchTodosAsync.request, fetchUser);
  }
let headerSaga = [
    mySaga
]
export default headerSaga;

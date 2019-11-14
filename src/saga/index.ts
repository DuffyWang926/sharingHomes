import headerSaga from './header'


import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  for( let k of headerSaga){
    yield fork(k)
  }
}
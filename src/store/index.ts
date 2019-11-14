import { createStore , applyMiddleware } from 'redux';
import  rootReducer  from './root-reducer';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from '../saga'; 
const sagaMiddleware = createSagaMiddleware(); 

export const history = createBrowserHistory();
const store = createStore(rootReducer,{},applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;
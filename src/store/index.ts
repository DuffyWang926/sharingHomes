import { createStore } from 'redux';
import  rootReducer  from './root-reducer';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const store = createStore(rootReducer,{});


export default store;
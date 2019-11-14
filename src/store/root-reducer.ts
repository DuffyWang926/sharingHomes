import { combineReducers } from 'redux';

import countersReducer from '../features/counters/reducer';
import headerReducer from '../features/header/reducer';

const rootReducer = combineReducers({
  counters: countersReducer,
  header:headerReducer
});

export default rootReducer;

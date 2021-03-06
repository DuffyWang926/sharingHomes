import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as header from './actions';
import { CHANGETAB, LOGIN_SUCCESS } from './constants';

export type HeaderAction = ActionType<typeof header>;

export interface user {
  name:string
}
export type HeaderState = {
  readonly tabKey: number;
  readonly user: user;
  
};

export default combineReducers<HeaderState, HeaderAction>({
  tabKey: (state = 0, action) => {
    switch (action.type) {
      case CHANGETAB:
        return action.payload; 
      default:
        return state;
    }
  },
  user: (state = {name:''}, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        const {name} = action.payload
        return {name}; 
      default:
        return state;
    }
  },
});

import { action } from 'typesafe-actions';

import { CHANGETAB, LOGIN , LOGIN_SUCCESS } from './constants';


export const changeTab = (num:number) => action(CHANGETAB,num);
export const logIn = (obj:object) => action(LOGIN,obj);
export interface user {
    name:string
  }
export const logInSuccess = (obj:user) => action(LOGIN_SUCCESS,obj);




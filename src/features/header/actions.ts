import { action } from 'typesafe-actions';

import { CHANGETAB, LOGIN} from './constants';


export const changeTab = (num:number) => action(CHANGETAB,num);
export const logIn = (obj:object) => action(LOGIN,obj);




import { combineReducers } from 'redux';

import { BasicInfoReducer } from './BasicInfoReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
  basicInfo: BasicInfoReducer
});
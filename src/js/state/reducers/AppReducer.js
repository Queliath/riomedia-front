import { combineReducers } from 'redux';

import { BasicInfoReducer } from './BasicInfoReducer';

export const AppReducer = combineReducers({
  basicInfo: BasicInfoReducer
});
import { combineReducers } from 'redux';

import { BasicInfoReducer } from './BasicInfoReducer';
import { ClientsReducer } from './ClientsReducer';

export const AppReducer = combineReducers({
    basicInfo: BasicInfoReducer,
    clients: ClientsReducer
});
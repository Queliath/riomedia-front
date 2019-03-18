import {
  BASIC_INFO_PENDING,
  BASIC_INFO_FULFILLED,
  BASIC_INFO_REJECTED
} from '../actions/BasicInfoActions';

const initialState = {
  basicInfo: {},
  fetching: true,
  fetched: false,
  failed: false
};

export const BasicInfoReducer = (state = initialState, action) => {
  let propObj = {...state};
  switch(action.type) {
    case BASIC_INFO_PENDING: {
      return propObj;
    }
    case BASIC_INFO_FULFILLED: {
      sessionStorage.setItem('basicInfo', JSON.stringify(action.payload));
      propObj.basicInfo = action.payload;
      propObj.fetching = false;
      propObj.fetched = true;
      return propObj;
    }
    case BASIC_INFO_REJECTED: {
      propObj.fetching = false;
      propObj.failed = true;
      return propObj;
    }
    default:
      return state;
  }
};
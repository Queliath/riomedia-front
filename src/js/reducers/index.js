import { REQUEST_BASIC_INFO, RECEIVE_BASIC_INFO } from '../actions/index';

const initialState = {
  isFetching: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BASIC_INFO: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }

    case RECEIVE_BASIC_INFO: {
      return Object.assign({}, state, {
        isFetching: false,
        basicInfo: action.basicInfo
      });
    }

    default: return { ...state};
  }
};

export default rootReducer;
import {
  CLIENTS_PENDING,
  CLIENTS_FULFILLED,
  CLIENTS_REJECTED
} from '../actions/ClientsActions';

const initialState = {
  clients: [],
  fetching: true,
  fetched: false,
  failed: false
};

export const ClientsReducer = (state = initialState, action) => {
  let propObj = {...state};
  switch(action.type) {
    case CLIENTS_PENDING:{
      return propObj;
    }
    case CLIENTS_FULFILLED: {
      propObj.clients = action.payload;
      propObj.fetching = false;
      propObj.fetched = true;
      return propObj;
    }
    case CLIENTS_REJECTED: {
      propObj.fetching = false;
      propObj.failed = true;
      return propObj;
    }
    default:
      return state;
  }
};
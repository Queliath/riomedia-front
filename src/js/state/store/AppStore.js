import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { AppReducer } from '../reducers/AppReducer';

export const createAppStore = () => {
  return createStore(AppReducer, applyMiddleware(thunk, promiseMiddleware()));
};


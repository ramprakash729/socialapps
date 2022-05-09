import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';


let store;

export function configureStore() {
  //createStore -> redux
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}

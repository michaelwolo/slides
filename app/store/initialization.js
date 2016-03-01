import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers/reducers';

export default function(data) {
  var reducer = combineReducers(reducers);
  var createFinalStore = applyMiddleware(thunk)(createStore);
  var store = createFinalStore(reducer, data);
  return store;
}

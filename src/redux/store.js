import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-redux';
import thunkMiddleware from 'redux-thunk';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, ...middlewares));
export default store;
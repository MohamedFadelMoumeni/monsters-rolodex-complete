
import { combineReducers } from 'redux';
import { searchReducer, fetchReducer } from './searchReducer';

export default combineReducers({
    search: searchReducer,
    monsterElement: fetchReducer
});
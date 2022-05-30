import { combineReducers } from "redux";
import useReducers from './reducer';

const rootReducer = combineReducers({
    data: useReducers
})

export default rootReducer;

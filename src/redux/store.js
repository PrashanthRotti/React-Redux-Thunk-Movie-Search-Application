import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleWeares = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
    middleWeares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWeares));

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux"
import numberReducer from "../number/reducers";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({ number: numberReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));


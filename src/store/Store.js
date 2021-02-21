import {createStore, applyMiddleware } from "redux";
import  Thunk from "redux-thunk";
import mainReducer from "../reducer/mainReducer";

const store = createStore(mainReducer, applyMiddleware(Thunk));

export default store;
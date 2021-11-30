import { createStore, combineReducers } from "redux";
//IMPORT ALL REDUCERS
import { authReducer } from "./reducers/auth";

const rootReducer = combineReducers({ auth: authReducer });

export let store = createStore(rootReducer);

import { combineReducers } from "redux";
import main from "./main";

const root = combineReducers({
  main: main,
});

export default root;

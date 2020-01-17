import Reducer from "./Reducer";
import ReducerFruit from "./ReducerFruit";
import { combineReducers } from "redux";

const ComineReducer = combineReducers({
  AppState: Reducer,
  FruitState: ReducerFruit
});

export default ComineReducer;

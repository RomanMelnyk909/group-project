import { createStore, combineReducers } from "redux";
import { counterReducer } from "../reducers/counterReduser";
import { userReducer } from "../reducers/userRedusers";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(counterReducer);
// const store = createStore(rootReducer);

export default store;

import { createStore, combineReducers } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import {usersReducer} from "../reducers/usersReduser";

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
})

const store = createStore(rootReducer);
export default store;
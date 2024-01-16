import { createStore, combineReducers } from "redux";
import { counnterReducer } from "../reducerc/counterReducer"; 
import { usersReducer } from "../reducerc/userReducer"; 


const rootReducer = combineReducers({
    counter: counnterReducer,
    users: usersReducer,
})

const store = createStore(rootReducer);

export default store;
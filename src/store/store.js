import { createStore, combineReducers } from "redux";
import { counnterReducer } from "../reducerc/counterReducer"; 
import { usersReducer } from "../reducerc/usersReducer"; 


const rootReducer = combineReducers({
    counter: counnterReducer,
    users: usersReducer,
})

const store = createStore(rootReducer);

export default store;
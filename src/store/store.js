import { createStore, combineReducers } from "redux";
import { counnterReducer } from "../reducerc/counterReducer"; 
import { usersReducer } from "../reducerc/usersReducer"; 

import { categoriesValReducer } from "../constants/categoriesValReducer";


const rootReducer = combineReducers({
    counter: counnterReducer,
    users: usersReducer,
    categories: categoriesValReducer,
})

const store = createStore(rootReducer);

export default store;
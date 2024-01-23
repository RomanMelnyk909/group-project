import { createStore, combineReducers } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import { usersReducer } from "../reducers/usersReduser";
import { counterCategories } from "../reducers/counterCAtegories";


const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    categories: counterCategories
})

const store = createStore(rootReducer);
export default store;
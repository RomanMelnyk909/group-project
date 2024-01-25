import { createStore, combineReducers } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import { usersReducer } from "../reducers/usersReducers";
import { productsReducer } from "../reducers/productsReducers";

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    products: productsReducer,
});

const store = createStore(rootReducer);

export default store;

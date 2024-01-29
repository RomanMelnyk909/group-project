import { DOUBLE_IT } from "../constants/actions";

const initialState = { categories: 0 };

export const categoriesValReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type){
        case DOUBLE_IT : return { ...state, categories: action.payload * 2 };

        default: return state;
    }
}
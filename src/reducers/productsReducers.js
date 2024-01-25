import { RESET } from "../constants/actions";

const initialState = { users: 0 };

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET:
        return { ...state, products: 0 };

        default: return state;
    }

};

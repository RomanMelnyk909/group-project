import { INCERMENT, DECERMENT, RESET, PLUS_NUMBER } from "../constants/actions";


const initialState = {count: 0};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCERMENT: return {...state, count: state.count + 1};

        case DECERMENT: return {...state, count: state.count - 1};
        
        case PLUS_NUMBER: return {...state, count: state.count + action.payload };

        case RESET: return {...state, count: 0};
        
        default: return state;
    }
}


import { DECERMENT, INCERMENT, NUL, PLUS_NUMBER } from "../constants/actions"

const initialState  = { count: 0 }

// {
//     type: "",
//     payload: "",
// }


export const counnterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCERMENT: return { ...state, count: state.count + 1}

        case DECERMENT: return { ...state, count: state.count - 1}

        case PLUS_NUMBER: return { ...state, count: state.count + action.payload}
        
        case NUL: return { ...state, count: 0}

        default: return state;
    }
}

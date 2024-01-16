import { DECERMENT, INCERMENT, NUL, PLUS_NUMBER } from "../constants/actions"

const initialState  = { usersCount: 0 }

// {
//     type: "",
//     payload: "",
// }


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case NUL: return { ...state, users: 0}

        default: return state;
    }
}

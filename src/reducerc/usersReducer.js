import { RESET } from "../constants/actions"

const initialState  = { usersCount: 0 }
// const initialState  = { users: 0 }

// {
//     type: "",
//     payload: "",
// }


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case RESET: return { ...state, users: 0}

        default: return state;
    }
}

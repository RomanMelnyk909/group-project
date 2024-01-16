import { DECREMENT, INCREMENT, PLUS_NUMBER, RESET } from "../constants/actions";

const initialState = {users:0}

export const counterReducer = (state = initialState, action)=>{
    switch (action.type) {
        case RESET: return {...state, users: state.users=0};
        default:
            return state;
    }
}   

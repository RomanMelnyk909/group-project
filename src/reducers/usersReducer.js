import { RESET } from "../constants/actions";

const initialState = { users: 0 };

export const usersReducer = (state = initialState, action) => {
	switch(action.type){
		case RESET : return {...state, users: 0};
		default: return state;
	}
}
import { DECREMENT, INCREMENT, PLUS_NUMBER, RESET } from "../constants/actions";

const initialState = { count: 0 };

// {
// 	type: "",
// 	payload: "",
// }

export const counterReducer = (state = initialState, action) => {
	switch(action.type){
		case INCREMENT : return {...state, count: state.count + 1};
		case DECREMENT : return {...state, count: state.count - 1};
		case RESET : return {...state, count: 0};
		case PLUS_NUMBER : return {...state, count: state.count + action.payload };
		default: return state;
	}
}
import { MULT_BY_TWO } from "../constants/actions";

const initialState = { products: 0 };

export const productsReducer = (state = initialState, action) => {
	switch(action.type){
		case MULT_BY_TWO : return {...state, products: action.payload * 2};

		default: return state;
	}
}
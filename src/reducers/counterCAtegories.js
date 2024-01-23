import { CATEGORIES_NUMBER } from "../constants/actions";

const initialState = { cat: 0 }

export const counterCategories = (state = initialState, action) => {
   switch (action.type) {
      case CATEGORIES_NUMBER: return { ...state, cat: action.payload }

      default:
         return state;
   }
}
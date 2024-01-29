import {
  DECERMENT,
  INCERMENT,
  PLUS_NUMBER,
  RESET,
  SET_BLOG_COUNT,
  DOUBLE_BLOG_COUNT,
} from "../constants/actions";

const initialState = { count: 0, blogCount: 0 };

// {
// 	type: "",
// 	payload:"",
// }

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCERMENT:
      return { ...state, count: state.count + 1 };

    case DECERMENT:
      return { ...state, count: state.count - 1 };

    case RESET:
      return { ...state, count: 0 };

    case PLUS_NUMBER:
      return { ...state, count: state.count + action.payload };

    case SET_BLOG_COUNT:
      return { ...state, blogCount: action.payload };

    case DOUBLE_BLOG_COUNT:
      return { ...state, blogCount: state.blogCount * 2 };

    default:
      return state;
  }
};

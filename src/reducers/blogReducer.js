const initialState = {
  cardCount: 0,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARD_COUNT':return { ...state, cardCount: action.payload };
    
    case 'DOUBLE_CARD_COUNT':return { ...state, cardCount: state.cardCount * 2 };
    
      default:return state;
  }
};

export default blogReducer;

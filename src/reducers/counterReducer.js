const initialState = { count: 0 };



export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCERMENT': return { ...state, count: state.count + 1 };

        case 'DECERMENT': return { ...state, count: state.count - 1 };

        default: return state;
    }
}
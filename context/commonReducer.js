const commonReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload.result,
            };
        
        default:
            return state;
    }
};

export default commonReducer;
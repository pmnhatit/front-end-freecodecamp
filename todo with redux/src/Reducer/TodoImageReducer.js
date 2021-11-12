import * as types from '../constants/constantsType';
const initState = [];

export const TodoImageReducer = function(state = initState, action){
    switch(action.type){
        case types.ADD_IMAGE_ITEM:
            return [...state, action.payload];
        case types.DELETE_IMAGE_ITEM:
            const newList = state.filter(item => {
                return item.id !== action.index;
            });
            return newList;
        case types.ANSWER_IMAGE:
            const indexItem = state.findIndex(item => item.id==action.payload.id);
            return [...state.slice(0,indexItem),
            {
                ...state[indexItem],
                answer: action.payload.answer
            },
            ...state.slice(indexItem+1,state.length)];
        default: return state;
    }
}
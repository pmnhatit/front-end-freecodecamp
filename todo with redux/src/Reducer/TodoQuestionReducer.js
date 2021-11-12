import * as types from '../constants/constantsType';
const initState = [];

export const TodoQuestionReducer = function(state=initState, action){
    switch(action.type){
        case types.ADD_QUESTION_ITEM:
            return [...state, action.payload];
        case types.DELETE_QUESTION_ITEM:
            const newList = state.filter(item => {
                return item.id !== action.id;
            });
            return newList;
        default: return state;
    }
}
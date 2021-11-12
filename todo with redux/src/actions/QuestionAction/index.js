import * as types from '../../constants/constantsType';

let nextTodoId = 0;

export const addItem = content =>{
    return {
        type: types.ADD_QUESTION_ITEM,
        payload: {
            id: nextTodoId,
            content: content,
            answer: ''
        }
    }
}

export const deleteItem = id =>{
    return {
        type: types.DELETE_QUESTION_ITEM,
        id
    }
}
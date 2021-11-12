import * as types from '../../constants/constantsType';

let nextTodoId = 0;

export const addTextItem = content =>{
    return {
        type: types.ADD_TEXT_ITEM,
        payload: {
            id: nextTodoId++,
            content: content,
            answer: ''
        }
    }
}

export const deleteTextItem = index =>{
    return {
        type: types.DELETE_TEXT_ITEM,
        index
    }
}

export const addTextAnswer = payload =>{
    return {
        type: types.ANSWER_TEXT,
        payload: payload
    }
}
import * as types from '../../constants/constantsType';

let nextTodoId = 0;

export const addImageItem = content =>{
    return {
        type: types.ADD_IMAGE_ITEM,
        payload: {
            id: nextTodoId++,
            content: content,
            answer: ''
        }
    }
}

export const deleteImageItem = index =>{
    return {
        type: types.DELETE_IMAGE_ITEM,
        index
    }
}

export const addImageAnswer = payload =>{
    return {
        type: types.ANSWER_IMAGE,
        payload: payload
    }
}
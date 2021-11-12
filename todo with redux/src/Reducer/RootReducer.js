import { combineReducers} from 'redux';
import {todoTextReducer} from './TodoTextReducer';
import {TodoImageReducer} from './TodoImageReducer';
import {TodoQuestionReducer} from './TodoQuestionReducer';
import {RoleReducer} from './RoleReducer';

const RootReducer = combineReducers({
    todoText: todoTextReducer,
    todoImage: TodoImageReducer,
    todoQuestion: TodoQuestionReducer,
    role: RoleReducer
});
export {RootReducer}
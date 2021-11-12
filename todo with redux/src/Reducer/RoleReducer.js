import * as types from '../constants/constantsType';

const initState = 0;

export const RoleReducer = (state=initState, action) =>{
    switch(action.type){
        case types.CHANGE_ROLE:
            return action.role;
        default: return state;
    }
}
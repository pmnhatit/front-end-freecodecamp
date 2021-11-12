import * as types from '../../constants/constantsType';

export const changeRole = role =>{
    return {
        type: types.CHANGE_ROLE,
        role
    }
}
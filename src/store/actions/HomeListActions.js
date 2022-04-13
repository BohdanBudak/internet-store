import * as types from '../../constants/constTypes';

export const getList = (list) => ({
    type: types.ADD_HOME_LIST,
    payload: list
})


export const listLoading = (isLoading) => ({
    type: types.LIST_LOADING,
    payload: isLoading
})
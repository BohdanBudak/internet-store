import * as types from '../../constants/constTypes';

export const getList = (list) => ({
    type: types.ADD_FAVOURITE_LIST,
    payload: list
})

export const updateList = (list) => ({
    type: types.CHANGE_FAVOURITE_LIST,
    payload: list
});

export const addItem = (item) => ({
    type: types.ADD_FAVOURITE_ITEM,
    payload: item
});
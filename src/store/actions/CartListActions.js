import * as types from '../../constants/constTypes';

export function getList(list) {

    return dispatch => {
        dispatch({
            type: types.ADD_CART_LIST,
            payload: list
        });
    };
}

export function updateList(list) {

    return dispatch => {
        dispatch({
            type: types.CHANGE_CART_LIST,
            payload: list
        });
    };
}

export function addItem(item) {

    return dispatch => {
        dispatch({
            type: types.ADD_CART_ITEM,
            payload: item
        });
    };
}
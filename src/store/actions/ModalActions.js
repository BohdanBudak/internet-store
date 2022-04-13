import * as types from '../../constants/constTypes';

export function showModal() {

    return dispatch => {
        dispatch({
            type: types.CHANGE_MODAL
        });
    };
}
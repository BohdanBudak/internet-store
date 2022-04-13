import * as types from '../../constants/constTypes';

function modalReducer(state = false, action = {}) {
    switch (action.type) {
        case types.CHANGE_MODAL:
            return !state;

        default:
            return state;
    }
}

export default (modalReducer);
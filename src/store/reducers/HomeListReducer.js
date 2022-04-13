import * as types from '../../constants/constTypes';

const initState = {
    homeList: [],
    isLoading: true,
};

function homeListReducer(state = initState, action) {

    switch (action.type) {

        case types.ADD_HOME_LIST:
            return {...state, ...{homeList: action.payload}};

        case types.LIST_LOADING:
            return {...state, isLoading: action.payload }

        default:
            return state
    }
}

export default (homeListReducer);
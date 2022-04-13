import * as types from '../../constants/constTypes';

const initState = {
    favouriteList: [],
    isExistFavouriteList: false,
};

function favouriteListReducer(state = initState, action = {}) {

    switch (action.type) {

        case types.ADD_FAVOURITE_LIST:
            return {...state, ...{favouriteList: action.payload}};

        case types.CHANGE_FAVOURITE_LIST:
            return {...{favouriteList: action.payload}};

        case types.ADD_FAVOURITE_ITEM:
            return {...state, favouriteList: [...state.favouriteList, action.payload]};

        default:
            return state;
    }
}

export default (favouriteListReducer);
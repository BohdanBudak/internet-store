import * as types from '../../constants/constTypes';

const initState = {
    cartList: [],
};

function cartListReducer(state = initState, action = {}) {

    switch (action.type) {

        case types.ADD_CART_LIST:
            return {...state, ...{cartList: action.payload}};

        case types.CHANGE_CART_LIST:
            return {...{cartList: action.payload}};

        case types.ADD_CART_ITEM:
            return {...state, cartList: [...state.cartList, action.payload]};

        default:
            return state;
    }
}

export default (cartListReducer);
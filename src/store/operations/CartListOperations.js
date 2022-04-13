import * as cartListActions from '../actions/CartListActions';
import LocalStorage from "../../services/LocalStorage";


export const loadCartList = () => (dispatch) => {
    const array = LocalStorage.getCardsFromLocalStorage('cart');

    if (array) {
        dispatch(cartListActions.getList(array));
    }
}

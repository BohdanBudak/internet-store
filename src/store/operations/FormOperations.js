import * as cartListActions from '../actions/CartListActions';
import LocalStorage from "../../services/LocalStorage";


export const clearCartList = () => (dispatch) => {
    LocalStorage.clearLocalStorage('cart');
    dispatch(cartListActions.updateList([]));
}

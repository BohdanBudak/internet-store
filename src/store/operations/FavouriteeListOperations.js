import * as favouriteListActions from "../actions/FavouriteListActions";
import LocalStorage from "../../services/LocalStorage";


export const loadFavouriteList = () => (dispatch) => {
    const array = LocalStorage.getCardsFromLocalStorage('favourite');

    if (array) {
        dispatch(favouriteListActions.getList(array));
    }
}

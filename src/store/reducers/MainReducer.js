import { combineReducers } from 'redux'
import homeListReducer from './HomeListReducer';
import favouriteListReducer from './FavouriteListReducer';
import cartListReducer from './CartListReducer';
import modalReducer from './ModalReducer';

const rootReducer = combineReducers({
    homeListReducer,
    favouriteListReducer,
    cartListReducer,
    modalReducer
})

export default rootReducer;
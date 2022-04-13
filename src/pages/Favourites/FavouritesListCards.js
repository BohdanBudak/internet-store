import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";
import styles from './FavouritesListCardsStyles';
import {useSelector, useDispatch} from "react-redux";
import * as modalActions from "../../store/actions/ModalActions";
import Card from "../../components/Card/Card";
import EmptyFavourites from "../EmptyFavourites/EmptyFavourites";

function FavouritesListCards(props) {

    const {classes} = props;

    const favouriteList = useSelector(state => state.favouriteListReducer.favouriteList);
    const isOpenModal = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();
    console.log(favouriteList);

    const handleToggleModal = () => {
        dispatch(modalActions.showModal());
        return isOpenModal;
    };

    const newItems = favouriteList.map((item, i) => (<Card key={i} data={item} toggleModal={handleToggleModal}/>));

    if (favouriteList.length === 0) {
        return <EmptyFavourites />
    }

    return (
        <div className={classes.listCards}>
            {newItems}
        </div>
    );
}

FavouritesListCards.propTypes = {
    favouriteList: PropTypes.object,
    isOpenModal: PropTypes.bool,
};

export default injectSheet(styles)(FavouritesListCards);
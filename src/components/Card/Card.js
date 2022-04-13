import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import injectSheet from "react-jss";
import styles from "./CardStyle";
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Modal from "../Modal/Modal";
import LocalStorage from '../../services/LocalStorage';
import * as favouriteListActions from "../../store/actions/FavouriteListActions";
import * as cartListActions from "../../store/actions/CartListActions";

function Card(props) {

    const {data, classes, toggleModal} = props;
    const [favourite, setFavourite] = useState(false);
    const [itemInCart, setItemInCart] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const favouriteList = useSelector(state => state.favouriteListReducer.favouriteList);
    const cartList = useSelector(state => state.cartListReducer.cartList);
    const dispatch = useDispatch();

    useEffect( () => {
        if (favouriteList) {
            const elem = favouriteList.find(element => {return element.article === data.article});
            if (elem) {
                setFavourite(true);
            }
        }
    }, [data.article, favouriteList]);

    useEffect( () => {
        if (cartList) {
            const elem = cartList.find(element => {return element.article === data.article});
            if (elem) {
                setItemInCart(true);
            }
        }
    }, [data.article, cartList]);

    const handleClickToCart = () => {
        LocalStorage.postCardToLocalStorage('cart', data);
        dispatch(cartListActions.addItem(data));
        setItemInCart(!itemInCart);
        handleToggleModal();
    };

    const handleDeleteFromCart = () => {
        LocalStorage.deleteCardFromLocalStorage('cart', data.article);
        setItemInCart(!itemInCart);

        const newList = cartList.filter(elem => elem.article !== data.article);
        dispatch(cartListActions.updateList([...newList]));

        handleToggleModal();
    };

    const handleClickToFavourite = () => {
        if(!favourite) {
            LocalStorage.postCardToLocalStorage('favourite', data);
            dispatch(favouriteListActions.addItem(data));
        } else {
            LocalStorage.deleteCardFromLocalStorage('favourite', data.article);
            const newList = favouriteList.filter(elem => elem.article !== data.article);
            dispatch(favouriteListActions.updateList([...newList]));
        }

        handleToggleFavourite();
    };

    const handleToggleFavourite = () => {
        setFavourite(!favourite);
    };

    const handleToggleModal = () => {
        setIsModalOpen(!toggleModal());
    };

    const iconFavourite = <FontAwesomeIcon icon={faStar}/>;

    const buttonsDefaultModal = [
        <Button key="1" width={100} height={50} fontSize={16} additionClass="btnOk" text="Ok" onClick={handleClickToCart}/>,
        <Button key="2" width={100} height={50} fontSize={16} additionClass="btnCancel" text="Cancel" onClick={handleToggleModal}/>
    ];
    const buttonsDeleteModal = [
        <Button key="1" width={100} height={50} fontSize={16} additionClass="btnOk" text="Ok" onClick={handleDeleteFromCart}/>,
        <Button key="2" width={100} height={50} fontSize={16} additionClass="btnCancel" text="Cancel" onClick={handleToggleModal}/>
    ];

    return(

        <div className={classes.card}>
            <img className={classes.cardImage} src={data.url} alt={data.name} width="100"/>
            <h3 className={classes.cardTitle}>
                {data.name}
            </h3>
            <p className={classes.cardArticle}>
                Article: {data.article}
            </p>
            <div className={classes.cardPrice}>
                {data.price} $
            </div>
            <div className={classes.cardButtonsContainer}>
                <Button width={35} height={35} fontSize={16} additionClass={favourite ? "btnToggleFavouriteTrue" : "btnToggleFavouriteFalse"}
                        type="button"
                        text={iconFavourite}
                        onClick={handleClickToFavourite}/>
                {!itemInCart && <Button width={130} height={50} fontSize={16} additionClass="btnAddToCard"
                                        type="button"
                                        text="Add to Card"
                                        onClick={handleToggleModal}/>}
                {isModalOpen && !itemInCart && <Modal header="Are yor sure?"
                                                      closeButton={true}
                                                      text="Do you want to add this product to the cart?"
                                                      actions={buttonsDefaultModal}
                                                      onClose={handleToggleModal}/>}
                {itemInCart && <Button width={130} height={50} fontSize={16} additionClass="btnRemove"
                                       type="button"
                                       text="Remove"
                                       onClick={handleToggleModal}/>}
                {isModalOpen && itemInCart && <Modal header="Are yor sure?"
                                                     closeButton={true}
                                                     text="Do you want to remove this product from the cart?"
                                                     actions={buttonsDeleteModal}
                                                     onClose={handleToggleModal}/>}
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object,
    classes: PropTypes.object,
    toggleModal: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.bool
    ]),

};
export default injectSheet(styles)(Card);
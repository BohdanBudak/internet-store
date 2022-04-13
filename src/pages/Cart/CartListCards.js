import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";
import styles from './CartListCardsStyles';
import {useSelector, useDispatch} from "react-redux";
import * as modalActions from "../../store/actions/ModalActions";
import Card from "../../components/Card/Card";
import FormUser from "../../components/FormUser/FormUser";
import EmptyCart from "../EmptyCart/EmptyCart";

function CartListCards(props) {

    const {classes} = props;

    const cartList = useSelector(state => state.cartListReducer.cartList);
    const isOpenModal = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    const handleToggleModal = () => {
        dispatch(modalActions.showModal());
        return isOpenModal;
    };

    const newCartItem = cartList.map((item, i) => (<Card key={item+i} data={item} toggleModal={handleToggleModal}/>));

    if(cartList.length === 0) {
        return <EmptyCart />
    }

    return (
        <div className={classes.mainCard}>
            <div className={classes.listCards}>
                {newCartItem}
            </div>
            <div className={classes.formUserInfo}>
                <FormUser/>
            </div>
        </div>

    );
}

CartListCards.propTypes = {
    cartList: PropTypes.object,
    isOpenModal: PropTypes.bool
};

export default injectSheet(styles)(CartListCards);
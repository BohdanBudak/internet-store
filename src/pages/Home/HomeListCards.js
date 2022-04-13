import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";
import styles from './HomeListCardsStyles';
import {useSelector, useDispatch} from "react-redux";
import * as modalActions from "../../store/actions/ModalActions";
import Card from "../../components/Card/Card";

function HomeListCards(props) {

    const {classes} = props;

    const homeList = useSelector(state => state.homeListReducer.homeList);
    const isOpenModal = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    const handleToggleModal = () => {
        dispatch(modalActions.showModal());
        return isOpenModal;
    };

    const itemObj = homeList.map((item, i) => (<Card key={i+item} data={item} toggleModal={handleToggleModal}/>));

    return (
        <div className={classes.listCards}>
            {itemObj}
        </div>
    );
}

HomeListCards.propTypes = {
    homeList: PropTypes.object,
    isOpenModal: PropTypes.bool
};

export default injectSheet(styles)(HomeListCards);
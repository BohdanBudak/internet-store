import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import injectSheet from "react-jss";
import PropTypes from 'prop-types';
import styles from "./AppStyles";
import AppRoutes from "./routers/AppRouters";
import Loader from "./components/Loader/Loader";
import {loadList} from "./store/operations/HomeListOperations";
import {loadFavouriteList} from "./store/operations/FavouriteeListOperations";
import {loadCartList} from "./store/operations/CartListOperations";


const App = (props) => {

    const {classes} = props;

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout( () => dispatch(loadList()), 3000);
    });

    useEffect(() => {
        dispatch(loadFavouriteList());
    });

    useEffect(() => {
        dispatch(loadCartList());
    });


    const isLoading = useSelector(state => state.homeListReducer.isLoading)

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className={classes.app}>
            <AppRoutes />
        </div>
    )
}

App.propTypes = {
    classes: PropTypes.object
};

export default injectSheet(styles)(App);

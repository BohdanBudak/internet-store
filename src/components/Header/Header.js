import React from 'react';
import {Link} from "react-router-dom";
import injectSheet from "react-jss";
import PropTypes from 'prop-types';
import styles from "./HeaderStyles";
import {routes} from '../../constants/constRouters';

function Header(props) {
    const {classes} = props;
    return (
        <header className={classes.header}>
            <ul className={classes.headerList}>
                <li className={classes.headerListItem}><Link to={routes.home.href}>{routes.home.name}</Link></li>
                <li className={classes.headerListItem}><Link to={routes.cart.href}>{routes.cart.name}</Link></li>
                <li className={classes.headerListItem}><Link to={routes.favourites.href}>{routes.favourites.name}</Link></li>
            </ul>
        </header>
    )
}

Header.propTypes = {
    classes: PropTypes.object
};

export default injectSheet(styles)(Header);
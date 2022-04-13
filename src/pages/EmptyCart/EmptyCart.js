import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import injectSheet from "react-jss";
import styles from './EmptyCartStyles'
import {routes} from "../../constants/constRouters";

const EmptyCart = (props) => {

    const {classes} = props;

        return (
            <div className={classes.emptyList}>
                <div className={classes.header}>Cart List is Empty! </div>
                <div className={classes.header}>Go back to home page and add some products to cart list! </div>
                <div>
                    <button className={classes.btnGoHome}>
                        <Link className={classes.btnGoHomeLink} to={routes.home.href} >Go to home page</Link>
                    </button>
                </div>
            </div>
        )
    }

export default injectSheet(styles)(EmptyCart)
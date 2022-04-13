import React from 'react'
import {Link} from 'react-router-dom'
import injectSheet from "react-jss";
import styles from './Page404Styles'
import {routes} from "../../constants/constRouters";

const Page404 = (props) => {

    const {classes} = props;

        return (
            <div className={classes.page_404}>
                <div className={classes.header}>404</div>
                <div className={classes.header}>Page not found</div>
                <button className={classes.btnGoHome}>
                    <Link className={classes.btnGoHomeLink} to={routes.home.href} >Go to home page</Link>
                </button>
            </div>
        )
    }

export default injectSheet(styles)(Page404)
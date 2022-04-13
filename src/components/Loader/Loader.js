import React from 'react'
import injectSheet from "react-jss";
import styles from './LoaderStyles'

function Loader (props) {
  const {classes} = props;

  return  (
      <div className={classes.loader}>
          <div className={classes.loaderItem}>Loading...</div>
          <div className={classes.loaderItem}>Please wait!</div>
      </div>

  )
}

export default injectSheet(styles)(Loader);
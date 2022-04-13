import React from 'react'
import { useField } from 'formik';
import styles from './InputStyles';
import injectSheet from "react-jss";


function Input(props) {
  const { label, name, classes, ...rest } = props;

  const [field, meta] = useField(name);

  return (
    <>
      <div className={classes.input}>
        <label className={classes.inputLabel}>
            {label} <input {...field} {...rest} className={classes.inputField} />
        </label>
      </div>
      {meta.touched && meta.error && <div className={classes.errorInput}>{meta.error}</div>}
    </>
  )
}

export default injectSheet(styles)(Input);

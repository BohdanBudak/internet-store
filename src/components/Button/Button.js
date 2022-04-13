import React from 'react';
import injectSheet from "react-jss";
import styles from "./ButtonStyles";
import PropTypes from "prop-types";

const Button = (props) => {

    const findAdditionalClass = () => {
        const {classes, additionClass} = props;
        for (let prop in classes) {
            if (prop === additionClass) {
                return classes[prop];
            }
        }
        return false;
    }
    const {text, width, height, fontSize, onClick, classes} = props;
    const addClass = findAdditionalClass();

    return (
        <button
            className={`${classes.btn} ${addClass}`}
            style={{width: width + 'px', height: height + 'px', fontSize: fontSize + 'px'}}
            type="button"
            onClick={onClick}>
            {text}
        </button>
    );
}

Button.propTypes = {
    additionClass: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    classes: PropTypes.object,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    onClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(Button);
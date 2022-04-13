import React from 'react';
import Button from "../Button/Button";
import injectSheet from "react-jss";
import styles from "./ModalStyles";
import PropTypes from 'prop-types';

const Modal = (props) => {

    const stopCloseModal = (e) => {
        e.stopPropagation()
    }

    const {header, closeButton, text, actions, classes, onClose} = props;

    return (
        <div className={classes.modal} onClick={onClose}>
            <div className={classes.modalContainer} onClick={stopCloseModal}>
                <div className={classes.modalHeader}>
                    <h2 className={classes.modalHeaderTitle}>
                        {header}
                    </h2>
                    {closeButton === "true" &&
                    <div className={classes.modalBtnClose}>
                        <Button text="X" width={'80'} height={'40'} fontSize={'18'} onClick={onClose}/>
                    </div>
                    }
                </div>
                <div className={classes.modalBody}>
                    <p className={classes.modalBodyText}>
                        {text}
                    </p>
                </div>
                {actions.length !== 0 &&
                <div className={classes.modalFooter}>
                    {actions}
                </div>
                }
            </div>
        </div>
    );
}

Modal.propTypes = {
    classes: PropTypes.object,
    header: PropTypes.string,
    closeButton: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    text: PropTypes.string,
    actions: PropTypes.array,
    onClose: PropTypes.func,
};

export default injectSheet(styles)(Modal);
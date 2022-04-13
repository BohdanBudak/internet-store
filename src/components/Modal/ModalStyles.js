export default {

    modal: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        width: '100%',
        height: '100%',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },

    modalContainer: {
        position: 'fixed',
        top: '45%',
        left: '35%',
        width: '450px',
        height: '200px',
        backgroundColor: 'darkslategray',
        borderRadius: '5px',
        zIndex: '1',
    },

    modalHeader: {
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },

    modalHeaderTitle: {
        margin: 0,
        padding: '10px',
        fontSize: '18px',
    },

    modalBtnClose: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 0,
        cursor: 'pointer',
    },

    modalBody: {
        padding: '0 50px',
    },

    modalBodyText: {
        margin: '30px 0',
        fontSize: '16px',
    },

    modalFooter: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px 0',
    }
}
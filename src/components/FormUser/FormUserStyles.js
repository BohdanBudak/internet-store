import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '550px',
        height: '600px',
        padding: '5px',
        backgroundColor: 'black',
        border: '2px solid',
        borderColor: 'rgb(255, 255, 255)',
        borderRadius: '10px',
        color: 'white',
    },

    userInfoHeader: {
        fontSize: '35px',
        fontWeight: '600',
        '&:hover': {
            cursor: 's-resize'
        }
    },
    btnCheckout: {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        width: '200px',
        height: '55px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        '&:hover': {
            backgroundColor: 'darkslategray',
            color: 'white',
        }
    },
})

export default useStyles;
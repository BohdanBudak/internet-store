export default {

    btn: {
        borderRadius: '5px',
        opacity: '0.8',
        cursor: 'pointer',
        outline: 'none',
        '&:hover': {
            opacity: '1',
        }
    },

    btnAddToCard: {
        padding: '8px',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: '600',
        '&:hover': {
            backgroundColor: 'rgba(193, 201, 200, 1)',
            color: 'rgb(0, 0, 0)',
        }
    },


    btnRemove: {
        padding: '8px',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: '600',
        '&:hover': {
            backgroundColor: 'rgba(193, 201, 200, 1)',
            color: 'rgb(0, 0, 0)',
        }
    },

    btnToggleFavouriteFalse: {
        opacity: '1',
        padding: 0,
        color: 'white',
        backgroundColor: 'black',
        border: 'none',
    },

    btnToggleFavouriteTrue: {
        opacity: '1',
        padding: 0,
        color: 'yellow',
        backgroundColor: 'black',
        border: 'none',
    },

    btnOk: {
        padding: '8px',
    },

    btnCancel: {
        padding: '8px',
    }
}
export default {

    header: {
        position: 'relative',
    },

    headerList: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 0',
        padding: '0 50px',
        listStyle: 'none',
    },

    headerListItem: {
        display: 'flex',
        justifyContent: 'center',
        width: '150px',
        backgroundColor: 'black',
        border: '2px solid white',
        borderRadius: '4px',
        color: 'white',
        cursor: 'pointer',

        '&:hover': {
                backgroundColor: 'white',
                borderColor: 'black',
                color: 'black',
            '& > a': {
                color: 'black',
            }
        },

        '& > a': {
            padding: '10px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: '700',
        }
    }
}
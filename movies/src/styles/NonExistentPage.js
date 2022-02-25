import { makeStyles } from '@mui/styles';

const style = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8%',
        width: '100%',
        '& img': {
            maxWidth: '100%',
            height: '35vh',
            marginBottom: '6rem',
        },
        '& h1': {
            fontSize: '37px',
            fontWeight: '100',
            letterSpacing: '1px',
            color: '#37474f',
            marginBottom: '60px',
        },
    }
}, {
    name: 'NonExistentPage'
})

export default style
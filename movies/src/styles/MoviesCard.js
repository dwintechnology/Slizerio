import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    cardImageStyle: {
        '&.MuiCardMedia-root': {
            width: "250px",
            height: "380px",
            objectFit: 'cover',
            borderRadius: '0.8rem',
            boxShadow: '0px 0px 20px 0px #000000',
            backgroundColor: 'transparent',
        }
    },
    cardNotFoundImageStyle: {
        width: "250px",
        height: "380px",
        objectFit: 'contain',
        borderRadius: '0.8rem',
        boxShadow: '0px 0px 20px 0px #000000',
        backgroundColor: 'transparent',
    },
    cardContent: {
        '&.MuiCardContent-root': {
            width: 180,
            textAlign: 'center',
        },
    },
    cardHover: {
        transition: 'all 300ms',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 220 * 1.03,
        '&:hover': {
            '& .MuiTypography-root': {
                color: 'white'
            }
        }
    },
}, {
    name: 'MoviesCard'
})

export default useStyle
import { makeStyles } from '@mui/styles';
import CardMedia from '@mui/material/CardMedia';
import constants from "../utils/constants";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const useStyle = makeStyles({
    cardImageStyle: {
        '&.MuiCardMedia-root': {
            width: "220px",
            height: "335px",
            objectFit: 'cover',
            borderRadius: '0.8rem',
            boxShadow: '0rem 2rem 5rem #00000033',
            transition: 'all 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
            backgroundColor: 'transparent',
        }
    },
    cardContent: {
        '&.MuiCardContent-root': {
            width: 180,
        },
    },
    cardHover: {
        transition: 'all 300ms',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 220 * 1.03,
        '&:hover': {
            transform: 'scale(1.03)',
            '& .MuiTypography-root': {
                color: 'white'
            }
        }
    },
}, {
    name: 'MoviesCard'
})

function MoviesCard({ movie }) {
    const cardStyle = useStyle();
    return (
        <div className={cardStyle.cardHover}>
            <CardMedia
                className={cardStyle.cardImageStyle}
                component="img"
                image={`${constants.SMALL_IMG_PATH}${movie.poster_path}`}
                alt="Paella dish"
            />
            <CardContent className={cardStyle.cardContent}>
                <Typography variant="p" color="text.secondary">
                    {movie.title}
                </Typography>
            </CardContent>
            <Rating name="no-value" value={null} style={{ marginBottom: 16 }} />
        </div>
    )
}
export default MoviesCard;
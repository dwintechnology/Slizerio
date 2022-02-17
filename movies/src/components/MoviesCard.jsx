import { makeStyles } from '@mui/styles';
import CardMedia from '@mui/material/CardMedia';
import constants from "../utils/constants";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const useStyle = makeStyles({
    cardImageStyle: {
        '&.MuiCardMedia-root': {
            width: "250px",
            height: "380px",
            objectFit: 'cover',
            borderRadius: '0.8rem',
            boxShadow: '0px 0px 20px 0px #000000',
            // transition: 'all 100ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
            backgroundColor: 'transparent',
        }
    },
    cardContent: {
        '&.MuiCardContent-root': {
            width: 180,
            textDecoration: 'none',
            textAlign: 'center',
        },
    },
    cardHover: {
        transition: 'all 300ms',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 220 * 1.03,
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
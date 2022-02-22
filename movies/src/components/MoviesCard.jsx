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

function MoviesCard({ movie }) {
    const cardStyle = useStyle();
    return (
        <div className={cardStyle.cardHover}>
            <CardMedia
                className={movie.poster_path == null ? `${cardStyle.cardNotFoundImageStyle}` : `${cardStyle.cardImageStyle}`}
                component="img"
                image={movie.poster_path == null ? 'https://movies.fidalgo.dev/static/media/nothing.4c58037b.svg' : `${constants.SMALL_IMG_PATH}${movie.poster_path}`}
                alt="Paella dish"
            />
            <CardContent className={cardStyle.cardContent}>
                <Typography variant="p" color="text.secondary">
                    {movie.title}
                </Typography>
            </CardContent>
            <Rating
                sx={{ marginRight: "5px", color: "#37474f", mb: "16px" }}
                name="simple-controlled" precision={0.5}
                value={(movie.vote_average * 5) / 9}
                readOnly
            />
        </div>
    )
}

export default MoviesCard;
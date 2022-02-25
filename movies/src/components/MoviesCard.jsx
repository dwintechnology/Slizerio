import CardMedia from '@mui/material/CardMedia';
import constants from "../utils/constants";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import nothingPhoto from '../assets/nothingPhoto.svg'
import useStyle from '../styles/MoviesCard'


function MoviesCard({ movie }) {
    const cardStyle = useStyle();
    return (
        <div className={cardStyle.cardHover}>
            <CardMedia
                className={movie.poster_path == null ? `${cardStyle.cardNotFoundImageStyle}` : `${cardStyle.cardImageStyle}`}
                component="img"
                image={movie.poster_path == null ? nothingPhoto : `${constants.SMALL_IMG_PATH}${movie.poster_path}`}
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
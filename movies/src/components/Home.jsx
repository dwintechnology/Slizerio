import { useEffect, useState } from "react";
import constants from "../utils/constants";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const useStyle = makeStyles({
    cardStyle: {
        '&.MuiCardMedia-root': {
            width: "220px",
            height: "335px",
            objectFit: 'cover',
            borderRadius: '0.8rem',
            boxShadow: '0rem 2rem 5rem #00000033',
            transition: 'all 100ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
            backgroundColor: 'transparent',

        }
    },

    cardMainStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 'unset !important',
        margin: '50px'
    }

}, {
    name: 'Home'
})


function Home({ setObj }) {
    const [data, setData] = useState();
    const [page, setPage] = useState(1)
    const cardStyle = useStyle()

    function LoadMovie() {
        setPage(page + 1)
        getMovies(page + 1)
    }

    function LoadPreviousMovies() {
        setPage(page - 1)
        getMovies(page - 1)
    }

    function getMovies(page) {
        fetch(`${constants.API_PATH}/movie/popular?api_key=${constants.API_KEY}c&language=en-US&page=${page}`)
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }

    useEffect(() => {
        getMovies(page)
    }, [])

    let items = data?.results.map((movie, index) => {
        return (
            <Grid key={index} item xs={3}>
                <Card sx={{ maxWidth: 334, maxHeight: 418 }} className={cardStyle.cardMainStyle}>
                    <Link onClick={() => { setObj(data) }
                    } to={`/film_About/${index}`}>
                        <CardMedia
                            className={cardStyle.cardStyle}
                            component="img"
                            image={`${constants.SMALL_IMG_PATH}${movie.poster_path}`}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="p" color="text.secondary">
                                {movie.title}
                            </Typography>
                        </CardContent>
                    </Link>
                </Card>
            </Grid>
        )
    })


    return (
        <div>
            <Grid container columnSpacing={5}>
                {items}
            </Grid>
            <button onClick={LoadPreviousMovies}>{`Page ${page - 1}`}</button>
            <button onClick={LoadMovie}>{`Page ${page + 1}`}</button>
        </div>
    )
}

export default Home
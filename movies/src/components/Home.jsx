import { useEffect, useState } from "react";
import constants from "../utils/constants";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import MoviesCard from "./MoviesCard";
import Search from "./Search";

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
        margin: '30px',
        padding: '20px',
        '&:hover': {
            transform: 'scale(1.03)'
        },
    },
    link: {
        '&:hover': {
            backgroundColor: '#37474f',
            transition: 'all 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
            boxShadow: '0px 0px 20px 0px #000000',
            borderRadius: '20px',
            '& .MuiCardMedia-root':{
                boxShadow: 'none',
            }
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        //transition: 'all 500ms',

    }
}, {
    name: 'Home'
})
function Home({ setObj }) {
    const [data, setData] = useState();
    const [page, setPage] = useState(1);
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
        fetch(`${constants.API_PATH}/movie/popular?api_key=${constants.API_KEY}&language=en-US&page=${page}`)
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }
    useEffect(() => {
        getMovies(page)
    }, [])
    let items = data?.results.map((movie, index) => {
        return (
            <Grid key={index} item xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ borderRadius: '0.8rem', width: 220 * 1.03 }} className={cardStyle.cardMainStyle}>
                    <Link
                        className={cardStyle.link}
                        onClick={(e) => {
                            e.stopPropagation();
                            setObj(data)
                        }}
                        to={`/film_About/${index}`}
                    >
                        <MoviesCard movie={movie} />
                    </Link>
                </Card>
            </Grid>
        )
    })
    return (
        <div>
            <Search setData={setData}/>
            <Grid container columnSpacing={1}>
                {items}
            </Grid>
            {(page > 1) && <button onClick={LoadPreviousMovies}>{`Page ${page - 1}`}</button>}
            <button onClick={LoadMovie}>{`Page ${page + 1}`}</button>
        </div>
    )
}
export default Home

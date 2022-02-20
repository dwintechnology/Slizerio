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
            backgroundColor: 'transparent',
        }
    },
    cardMainStyle: {
        display: 'flex',
        padding: '40px',
        boxShadow: 'unset !important',
        alignItems: 'center',
        flexDirection: 'column',
        width: '250px',
        width: '250px',
        '&:hover': {
            transform: 'scale(1.03)',
            transition: 'all 300ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;',

            '& .MuiCardMedia-root': {
                boxShadow: 'none',
                borderRadius: '0.8rem 0.8rem 0 0',
            },
            '& .MuiTypography-root': {
                color: 'white',
            
            },
            '& .Home-link-3': {
                backgroundColor: '#38474f',
                boxShadow: '0px 0px 20px 0px #000000',
                borderRadius: '12.8px',
                width: '250px',

            },
        },
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        "&:link": {
            textDecoration: "none !important"
        }
    }
}, {
    name: 'Home'
})
function Movies({ setObj, path}) {
    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    const cardStyle = useStyle()
    console.log(data)

    function LoadMovie() {
        setPage(page + 1)
        getMovies(page + 1)
    }
    function LoadPreviousMovies() {
        setPage(page - 1)
        getMovies(page - 1)
    }
    function getMovies(page) {
        fetch(`${path}${page}`)
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }
    useEffect(() => {
        getMovies(page)
    }, [])
    let items = data?.results.map((movie, index) => {
        return (
            <Grid key={index} item xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card className={cardStyle.cardMainStyle}>
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
            <Search setData={setData} />
            <Grid container  columns={{ xs: 1, sm: 6, md: 12 }} columnSpacing={1} spacing={0.5}>
                {items}
            </Grid>
            {(page > 1) && <button onClick={LoadPreviousMovies}>{`Page ${page - 1}`}</button>}
            <button onClick={LoadMovie}>{`Page ${page + 1}`}</button>
        </div>
    )
}
export default Movies

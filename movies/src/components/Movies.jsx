import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import MoviesCard from "./MoviesCard";
import Search from "./Search";
import { useSearchParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
        width: '290px',
        height: '600px',
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
            '& a': {
                backgroundColor: '#38474f',
                boxShadow: '0px 0px 20px 0px #000000',
                borderRadius: '12.8px',
                width: '250px',
            },
            '& .MuiRating-sizeMedium': {
                color: '#b0bec5',
            }
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
    },
    searchWrapper: {
        display: "flex",
        justifyContent: "end",
        marginTop: "50px"
    },
    title: {
        color: "#263238",
        fontWeight: 100,
        fontSize: "35px",
        letterSpacing: "0px",
        textTransform: "uppercase",
        marginBottom: "0px"
    },
    titleParagraph: {
        color: "#37474f",
        textTransform: "uppercase",
        fontWeight: "600",
        marginTop: "0px"
    },
    paginationDIV: {
        display: "flex",
        justifyContent: 'space-between',
        padding: "20px 25px 5px 25px",
        marginBottom: "15px",
        '& a': {
            borderRadius: "28.75px",
            padding: "10px 30px",
            backgroundColor: "#263238",
            textDecoration: "none",
            color: "white",
            display: 'flex',
            alignItems: "center"
        }
    },


}, {
    name: 'Home'
})

function Movies({ path, title }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState();
    const [page, setPage] = useState(searchParams.get("page") === null ? 1 : searchParams.get("page"))
    const cardStyle = useStyle()

    function getMovies(page) {
        fetch(`${path}${page}`)
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }

    useEffect(() => {
        getMovies(page)
    }, [path, page])

    let items = data?.results.map((movie, index) => {
        return (
            <Grid key={index} item xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card className={cardStyle.cardMainStyle}>
                    <Link
                        className={cardStyle.link}
                        to={`/film_About/${movie.id}`}
                    >
                        <MoviesCard movie={movie} />
                    </Link>
                </Card>
            </Grid>
        )
    })
    return (
        <div>
            <Grid container columns={{ xs: 1, sm: 6, md: 12 }} columnSpacing={1} spacing={0}>
                <Grid item xs={12}>
                    <div className={cardStyle.searchWrapper}>
                        <Search setData={setData} />
                    </div>
                    <div>
                        <h1 className={cardStyle.title}>{title}</h1>
                        <p className={cardStyle.titleParagraph}>Movies</p>
                    </div>
                </Grid>
                {items}
            </Grid>
            <div className={cardStyle.paginationDIV}>
                <div>
                    {(page > 1) && <Link onClick={() => { setPage(+page - 1) }} to={`?page=${+page - 1}`}><ArrowBackIcon /> {` Page ${+page - 1}`}</Link>}
                </div>
                <div>
                    <Link onClick={() => { setPage(+page + 1) }} to={`?page=${+page + 1}`}>{`Page ${+page + 1} `} <ArrowForwardIcon /></Link>
                </div>
            </div>
        </div>
    )
}

export default Movies

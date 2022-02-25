import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import MoviesCard from "./MoviesCard";
import Search from "./Search";
import { useSearchParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Loading from "./Loading";
import { useLocation } from 'react-router-dom'
import useStyle from "../styles/Movies";

function Movies({ path, title, search = true, setSearchParam, loading = true }) {
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState({});
    const [page, setPage] = useState(searchParams.get("page") === null ? 1 : searchParams.get("page"))
    const cardStyle = useStyle();
    const navigate = useNavigate();

    function getMovies(page) {
        setData({});
        try {
            fetch(`${path}${page}`)
                .then((a) => { return a.json() })
                .then((b) => {
                    setData(b)
                    if ('errors' in b) {
                        return navigate("/Something_went_wrong");
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovies(page)
    }, [path, page])

    useEffect(() => {
        setPage(searchParams.get("page") === null ? 1 : searchParams.get("page"))
    }, [title])

    let items = data?.results?.map((movie, index) => {
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
        <>
            {Object.keys(data).length == 0 ? (loading && <Loading />) 
                : <div>
                    <Grid container columns={{ xs: 1, sm: 6, md: 12 }} columnSpacing={1} spacing={0}>
                        <Grid item xs={12}>
                            {search && <div className={cardStyle.searchWrapper}>
                                <Search setSearchParam={setSearchParam} />
                            </div>}
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
                            {(data.total_pages > page) && <Link onClick={() => { setPage(+page + 1) }} to={`?page=${+page + 1}`}>{`Page ${+page + 1} `} <ArrowForwardIcon /></Link>}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Movies

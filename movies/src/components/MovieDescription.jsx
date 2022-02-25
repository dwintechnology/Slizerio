import { Button, Rating } from '@mui/material';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';
import constants from '../utils/constants';
import LinkIcon from '@mui/icons-material/Link';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Slider from './Slider';
import Genres from './Genres';
import { useEffect, useState } from "react";
import Loading from './Loading';
import YouTube from 'react-youtube';
import nothingPhoto from "../assets/nothingPhoto.svg"
import RecommendationMovies from "./RecommendationMovies";
import { useLocation } from 'react-router-dom'
import style from '../styles/MovieDescription';

function MovieDescription() {
    const location = useLocation()
    const descriptionStyle = style()
    const navigate = useNavigate();
    let { id } = useParams();
    const [obj, setMovie] = useState()
    const [triller, setTriller] = useState()
    const [showVideo, setShowVideo] = useState(false)
    function getMovie() {
        fetch(`${constants.API_PATH}/movie/${id}?api_key=${constants.API_KEY}`)
            .then((a) => { return a.json() })
            .then((b) => { setMovie(b) })
    }
    function getVideos() {
        fetch(`${constants.API_PATH}/movie/${id}?api_key=${constants.API_KEY}&append_to_response=videos`)
            .then((a) => { return a.json() })
            .then((b) => { setTriller(b) })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getMovie()
        getVideos()
    }, [location.pathname])

    if (!obj && !triller) {
        return <Loading />
    }
    return (
        <>
            <div className={descriptionStyle.parent}>
                <div className={descriptionStyle.bigdiv}>
                    <div className={descriptionStyle.divIMGCENTER}>
                        <img className={obj?.poster_path == null ? descriptionStyle.moviesNotFoundImg : descriptionStyle.moviesImg} src={obj?.poster_path == null ? nothingPhoto : `${constants.BIG_IMG_PATH}${obj?.poster_path}`} />
                    </div>
                    <div className={descriptionStyle.bigDIV2}>
                        <h2 className={descriptionStyle.movieTITLE}>{obj?.title}</h2>
                        <h4 className={descriptionStyle.parentTitle}>THE MULTIVERSE UNLEASHED</h4>
                        <div className={descriptionStyle.section1}>
                            <div className={descriptionStyle.starsDIV}>
                                <Rating sx={{ marginRight: "5px", color: "black" }} name="simple-controlled" precision={0.5} value={(obj?.vote_average * 5) / 9} readOnly />
                                <span> {obj?.vote_average} </span>
                            </div>
                            <h2 className={descriptionStyle.section1Language}><span>{obj?.original_language}</span>/<span>{obj?.release_date}</span></h2>
                        </div>
                        <h2 className={descriptionStyle.genresTITLE}>THE GENRES</h2>
                        <Genres genres={obj?.genres} />
                        <h3 className={descriptionStyle.genresTITLE}>
                            THE SYNOPSIS
                        </h3>
                        <p className={descriptionStyle.parentPARAGRAPH}>
                            {obj?.overview}
                        </p>
                        <h2 className={descriptionStyle.genresTITLE}>
                            THE CAST
                        </h2>
                        <div>
                            <Slider id={obj?.id} />
                        </div>
                        <div className={descriptionStyle.buttonsDIV}>
                            <Button className= {descriptionStyle.funcButton} sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black", border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "106px", height: "30px" }} variant="contained" color="success">
                                Website
                                < LinkIcon />
                            </Button>
                            <Button className= {descriptionStyle.funcButton}  sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black", marginLeft: "20px", border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "106px", height: "30px" }} variant="contained" color="success">
                                IMBD
                                <LocalMoviesIcon />
                            </Button>
                            {triller?.videos.results[0]?.key !== undefined &&
                                <Button className= {descriptionStyle.funcButton}  onClick={() => { setShowVideo(true) }} sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black", marginLeft: "20px", border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "106px", height: "30px" }} variant="contained" color="success">
                                    TRAILER
                                    <PlayArrowIcon />

                                </Button>
                            }
                             <Link onClick={() => navigate(-1)} sx={{ textDecoration: "none", color: "white", alignItems: "center", display: "flex" }}>
                            <Button className= {descriptionStyle.backButton}  sx={{ borderRadius: "50px", backgroundColor: "#253036", color: "white", marginLeft: "20px", border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "82px", height: "30px" }} variant="contained" color="success">
                                <ArrowBackIcon />
                                Back
                            </Button>
                        </Link>
                        </div>
                       

                    </div>
                    {
                        showVideo && <div className={descriptionStyle.trillerDiv}>
                            <YouTube
                                videoId={triller?.videos.results[0].key} />
                            <h1 onClick={() => { setShowVideo(!showVideo) }} className={descriptionStyle.trillerTitle}>
                                X
                            </h1>
                        </div>
                    }
                </div>

            </div>
            <div className={descriptionStyle.RecommendationMoviesWrapper}>
                <RecommendationMovies moviesId={obj?.id} />
            </div>
        </>
    )
}
export default MovieDescription
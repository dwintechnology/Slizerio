import { Button, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';
import constants from '../utils/constants';
import LinkIcon from '@mui/icons-material/Link';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const style = makeStyles({
    parent: {
        display: "flex",
        marginTop: "50px"
    },
    moviesImg: {
        width: "325px",
        height: "474px",
        borderRadius: "12.8px",
        boxShadow: "0rem 2rem 5rem #00000040",
        objectFit: 'cover',
    },
    moviesNotFoundImg: {
        width: "325px",
        height: "474px",
        borderRadius: "12.8px",
        boxShadow: "0rem 2rem 5rem #00000040",
        objectFit: 'contain',
    },
    bigdiv: {
        display: "flex",
        justifyContent: "space-between"
    },
    section1: {
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
    },
    parentTitle: {
        textTransform: "uppercase",
        lineHeight: 1.5,
        color: 'rgb(55 71 79)',
        fontSize: "15px",
        fontWeight: 700,
    },
    bigDIV2: {
        width: "518px",
        marginLeft:"50px"
    },
    movieTITLE: {
        fontSize: "31px",
        fontWeight: 200,
        lineHeight: 1.2,
        letterSpacing: "-0.5px",
        textTransform: "uppercase",
        marginBottom: "0.5rem"
    },
    genresTITLE:{
        color: "#243036",
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: "40px",
    fontSize: "11px"
    },
    parentICON: {
    width: "20px",
    height: "20px"    
    },
    section1Language:{
        fontWeight: 700,
        lineHeight: 1,
        textTransform: "uppercase",
        color: "#aebac1",
        fontSize: "11px"
    },
    parentPARAGRAPH:{
        fontSize: "11px",
    lineHeight: 1.8,
    color: "#444444",
    fontWeight: 400,
    marginBottom: "48px",
    },
    buttonsDIV:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"15px"
    },
    actorsIMG:{
        width:"50px",
        height:"50px",
        borderRadius:"20px",
        paddingBottom:"10px"
    },
    starsDIV:{
        display:"flex",
        alignItems:"center",
        fontSize: "1.3rem",
        lineHeight: 1,
        fontWeight: 700,
        color: "#384850"
    },
    "@media only screen and (max-width: 1000px)":{
        bigdiv:{
            display:"block",
        },
        divIMGCENTER:{
            display:"flex",
            justifyContent:"center"
        },
        moviesImg:{
            width: "300px",
            height: "400px"
        },
        bigDIV2:{
            marginLeft:"80px",
            width:"516px"
        }
    },
    "@media only screen and (max-width: 540px)":{
        bigDIV2:{
            width:"330px"
        }
    }
})
function MovieDescription({ obj }) {
    console.log(obj)
    const descriptionStyle = style()
    const navigate = useNavigate();
    let { id } = useParams();
    return (
        <div className={descriptionStyle.parent}>
            <div className={descriptionStyle.bigdiv}>
                <div className={descriptionStyle.divIMGCENTER}>
                    <img className={obj.results[id].poster_path == null ? descriptionStyle.moviesNotFoundImg : descriptionStyle.moviesImg} src={obj.results[id].poster_path == null ? 'https://movies.fidalgo.dev/static/media/nothing.4c58037b.svg' : `${constants.BIG_IMG_PATH}${obj.results[id].poster_path}`} />
                </div>
                <div className={descriptionStyle.bigDIV2}>
                    <h2 className={descriptionStyle.movieTITLE}>{obj.results[id].title}</h2>
                    <h4 className={descriptionStyle.parentTitle}>THE MULTIVERSE UNLEASHED</h4>
                    <div className={descriptionStyle.section1}>
                        <div className={descriptionStyle.starsDIV}>
                        <Rating  sx={{marginRight:"5px", color:"black"}} name="simple-controlled" precision={0.5} value={(obj.results[id].vote_average*5)/9 } readOnly/>
                        <span> {obj.results[id].vote_average} </span>
                        </div>
                        <h2 className={descriptionStyle.section1Language}><span>{obj.results[id].original_language}</span>/<span>{obj.results[id].release_date}</span></h2>
                    </div>
                    <h2 className={descriptionStyle.genresTITLE}>THE GENRES</h2>
                    <h3 className={descriptionStyle.genresTITLE}>
                        THE SYNOPSIS
                    </h3>
                    <p className={descriptionStyle.parentPARAGRAPH}>
                        {obj.results[id].overview}
                    </p>
                    <h2 className={descriptionStyle.genresTITLE}>
                        THE CAST
                    </h2>
                    <div>
                        <AccountCircleIcon/>
                        <AccountCircleIcon/>
                        <AccountCircleIcon/>
                        <AccountCircleIcon/>
                    </div>
                    <div className={descriptionStyle.buttonsDIV}>
                       <div>
                       <Button sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black",  border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "106px", height: "30px" }} variant="contained" color="success">
                            Website
                            < LinkIcon/>
                        </Button>
                        <Button sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black", marginLeft: "20px",  border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "106px", height: "30px" }} variant="contained" color="success">
                            IMBD
                            <LocalMoviesIcon/>
                       </Button>
                        <Button sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black", marginLeft: "20px", border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "106px", height: "30px" }} variant="contained" color="success">
                            TRAILER
                            <PlayArrowIcon/>
                        </Button>
                       </div>
                        <Button sx={{ borderRadius: "50px", backgroundColor: "#253036", color: "black", marginLeft: "20px",     border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "82px", height: "30px" }} variant="contained" color="success">
                           <Link onClick={() => navigate(-1)} sx={{ textDecoration: "none", color: "white", alignItems:"center", display:"flex" }}>
                               <ArrowBackIcon/>
                               Back
                               </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDescription
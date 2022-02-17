import { Button, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';
import constants from '../utils/constants';

const style = makeStyles({
    parent: {
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
    },
    moviesImg: {
        width: "500px",
        height: "700px",
        borderRadius: "0.8rem",
        boxShadow: "0rem 2rem 5rem #00000040",
        objectFit: 'cover',
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
        fontSize: "1.7rem",
        fontWeight: 700,
    },
    bigDIV2: {
        width: "700px",
        marginLeft:"6rem"
    },
    movieTITLE: {
        fontSize: "2.5rem",
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
    marginBottom: "1rem",
    fontSize: "1.4rem"
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
        fontSize: "1.3rem"
    },
    parentPARAGRAPH:{
        fontSize: "1.4rem",
    lineHeight: 1.8,
    color: "#444444",
    fontWeight: 500,
    marginBottom: "3rem",
    },
    buttonsDIV:{
        display:"flex",
        justifyContent:"space-between"
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
            marginLeft:"0px",
            width:"530px"
        }
    },
    "@media only screen and (max-width: 540px)":{
        bigDIV2:{
            width:"330px"
        }
    }
})
function MovieDescription({ obj }) {
    const descriptionStyle = style()
    let { id } = useParams();
    return (
        <div className={descriptionStyle.parent}>
            <div className={descriptionStyle.bigdiv}>
                <div className={descriptionStyle.divIMGCENTER}>
                    <img className={descriptionStyle.moviesImg} src={`${constants.BIG_IMG_PATH}${obj.results[id].poster_path}`} />
                </div>
                <div className={descriptionStyle.bigDIV2}>
                    <h2 className={descriptionStyle.movieTITLE}>{obj.results[id].title}</h2>
                    <h4 className={descriptionStyle.parentTitle}>THE MULTIVERSE UNLEASHED</h4>
                    <div className={descriptionStyle.section1}>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
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
                    <div className={descriptionStyle.buttonsDIV}>
                       <div>
                       <Button sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black",  border: "1px solid #242f34" }} variant="contained" color="success">
                            Website
                            <img className={descriptionStyle.parentICON} src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png" />
                        </Button>
                        <Button sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black", marginLeft: "20px",  border: "1px solid #242f34" }} variant="contained" color="success">
                            IMBD
                            <img className={descriptionStyle.parentICON} src="https://icon-library.com/images/icon-imdb/icon-imdb-8.jpg" />
                       </Button>
                        <Button sx={{ borderRadius: "50px", backgroundColor: "transparent", color: "black", marginLeft: "20px", border: "1px solid #242f34" }} variant="contained" color="success">
                            TRAILER
                            <img className={descriptionStyle.parentICON} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/OOjs_UI_icon_play-ltr.svg/1200px-OOjs_UI_icon_play-ltr.svg.png" />
                        </Button>
                       </div>
                        <Button sx={{ borderRadius: "50px", backgroundColor: "#253036", color: "black", marginLeft: "20px",     border: "1px solid #242f34" }} variant="contained" color="success">
                          
                           <Link sx={{ textDecoration: "none", color: "white", alignItems:"center", display:"flex" }} href="/">
                           <img className={descriptionStyle.parentICON} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Feedbin-Icon-left-arrow.svg/626px-Feedbin-Icon-left-arrow.svg.png" />
                               Home
                               </Link>
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDescription
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
    actorsIMG:{
        width:"50px",
        height:"50px",
        borderRadius:"20px",
        paddingBottom:"10px"
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
                    <div>
                        <img className={descriptionStyle.actorsIMG} src="data:image/jpeg;base64,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"/>
                        <img className={descriptionStyle.actorsIMG} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoW9ccv6pCw4kTn0551jCBesYGWxwuTcqCi85ulYNgjVAzZjeLpguF5HK2pZo7H74KpSU&usqp=CAU"/>
                        <img className={descriptionStyle.actorsIMG} src="data:image/jpeg;base64,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"/>
                        <img className={descriptionStyle.actorsIMG} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoW9ccv6pCw4kTn0551jCBesYGWxwuTcqCi85ulYNgjVAzZjeLpguF5HK2pZo7H74KpSU&usqp=CAU"/>
                    </div>
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
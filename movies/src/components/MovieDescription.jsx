import { Button, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';


const style = makeStyles({
    parent: {
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
    },
    moviesImg: {
        width: "500px",
        height: "600px",
        borderRadius: "20px"
    },
    bigdiv: {
        display: "flex",
        justifyContent: "space-between"
    },
    section1: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: "240px"
    },
    section1Language: {
        marginLeft: "180px"
    },
    parentTitle: {
        marginLeft: "90px"
    }
})
function MovieDescription({ obj }) {
    const descriptionStyle = style()
    let { id } = useParams();
    return (
        <div className={descriptionStyle.parent}>
            <div className={descriptionStyle.bigdiv}>

                <div>
                    <img className={descriptionStyle.moviesImg} src={}/>
                </div>
                <div >
                    <h2>{obj.results[id].title}</h2>
                    <h2>SPIDER MAN</h2>
                    <h4 className={descriptionStyle.parentTitle}>THE MULTIVERSE UNLEASHED</h4>
                    <div className={descriptionStyle.section1}>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <h2 className={descriptionStyle.section1Language}><span>{obj.results[id].original_language}</span>/<span>{obj.results[id].release_date}</span></h2>
                    </div>
                    <h2>THE GENRES</h2>
                    <h3>
                        THE SYNOPSIS
                    </h3>
                    <p>
                        {obj.results[id].overview}
                    </p>
                    <h2>
                        THE CAST
                    </h2>
                    <div>
                        <Button sx={{borderRadius:"50px", backgroundColor:"transparent", color:"black", marginLeft:"180px"}} variant="contained" color="success">
                            Website
                        </Button>
                        <Button sx={{borderRadius:"50px", backgroundColor:"transparent", color:"black", marginLeft:"20px"}} variant="contained" color="success">
                            Website
                        </Button>
                        <Button sx={{borderRadius:"50px", backgroundColor:"transparent", color:"black", marginLeft:"20px"}} variant="contained" color="success">
                            Website
                        </Button>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default MovieDescription
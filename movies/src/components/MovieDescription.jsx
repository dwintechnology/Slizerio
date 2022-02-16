import { Button,  Rating } from '@mui/material';
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
        width: "400px",
        height: "600px",
        borderRadius: "20px",
        boxShadow:"0rem 2rem 5rem #00000040"
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
    parentTitle: {
        marginLeft: "90px"
    },
    bigDIV2:{
        width:"700px",
        padding:"50px"
    },
    movieTITLE:{
        ontSize: "2.5rem",
        fontWeight: 200,
        lineHeight: 1.2,
        letterSpacing: "-0.5px",
        textTransform: "uppercase",
        marginBottom: "0.5rem"
    },
    parentICON:{
        width:"20px",
        height:"20px"

    }
})
function MovieDescription({ obj }) {
    const descriptionStyle = style()
    let { id } = useParams();
    return (
        <div className={descriptionStyle.parent}>
            <div className={descriptionStyle.bigdiv}>
                <div>
                    <img className={descriptionStyle.moviesImg} src={`${constants.BIG_IMG_PATH}${obj.results[id].poster_path}`}/>
                </div>
                <div className={descriptionStyle.bigDIV2}>
                    <h2 className={descriptionStyle.movieTITLE}>{obj.results[id].title}</h2>
                    <h4 className={descriptionStyle.parentTitle}>THE MULTIVERSE UNLEASHED</h4>
                    <div className={descriptionStyle.section1}>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <h2 className={descriptionStyle.section1Language}><span>{obj.results[id].original_language}</span>/<span>{obj.results[id].release_date}</span></h2>
                    </div>
                    <h2>THE GENRES</h2>
                    <h3>
                        THE SYNOPSIS
                    </h3>
                    <p style={{padding:"0px 50px 0px 260px"}}>
                        {obj.results[id].overview}
                    </p>
                    <h2>
                        THE CAST
                    </h2>
                    <div>
                        <Button sx={{borderRadius:"50px", backgroundColor:"transparent", color:"black", marginLeft:"180px"}} variant="contained" color="success">
                            Website
                            <img className={descriptionStyle.parentICON} src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png"/>   
                        </Button>
                        <Button sx={{borderRadius:"50px", backgroundColor:"transparent", color:"black", marginLeft:"20px"}} variant="contained" color="success">
                            IMBD
                            <img className={descriptionStyle.parentICON} src="data:image/png;base64,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"/>
                        </Button>
                        <Button sx={{borderRadius:"50px", backgroundColor:"transparent", color:"black", marginLeft:"20px"}} variant="contained" color="success">
                            TRAILER
                            <img className={descriptionStyle.parentICON} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADc3NwiIiKRkZEmJiaNjY2Kiorf398rKyvg4ODo6OgdHR3Z2dk8PDz7+/vHx8eioqIzMzNwcHBoaGizs7OoqKhERESXl5d8fHzz8/PR0dHr6+t4eHhOTk5cXFwVFRULCwvBwcFYWFivr69LS0t5GdrBAAAEMUlEQVR4nO3di3ISQRCF4Z5EREADyC1eMUbf/xWVlJZBQ/Yy3X1Ot3OeYL/6a0cqsotIW1tbW1tbW9ufLVfr6XS9WqKvw2qLTfm1zQJ9LSa7LY/2An01BjuWs01eoS9Ie9vy95Jl3P0DLGU2R1+V5p4A5sq4f1pYZmnuxsMFYZ6MF4FZDtX5M8IcGa+eFWY4VDuECTJ2CsMfqt3C6Bn7CGMfqr2EoTP2FAY+VPsK42bsL4x6qA4QBs04SBjyUB0mjJhxqDDe3ThYGC7jCGGwjGOEsTKOE0Y6VEcKA2UcLQxzN44XRslYI4yRsUpYykv09XevUliur9CCrtUK+TPWC8uEO6OCkDyjipA6o46QOaOWkPdQVRPSZlQUkt6NmkLOjLpCxozKQsKM6kK6Q1VfyJbRQsh1N5oIqTIaCYkyWgl5MtoJWQ5VQyFJRlMhxd1oK2TIaC3EZzQXwjM6CMGHqocQm9FHiLwbnYTAjG5CWEY/ISqjp7C8fpNdWMo0vRDwb6O30D+jv7Bc+96NAKFzRojQ9VDFCD0zooR+hypM6JYRKHQ6VJFCn4xYocehChY6ZIQLzQ9VvNA6I4PQ9lClEJpmJBEaHqosQruMPEKrQ5VIaJSRSmhyqHIJLTKyCfUPVTqhekZCofKhyijUzcgp1DxUSYWKGWmFaocqr7CU2/TC8i69sKzTC8vH9MJtemF5n164Sy+sP07Zhcf0wvv0wk16Yf0nN3bhh+zCu2ogu3CfXTirB5ILFT54cwtVXn9DLDzUf+rmFiocMtTCg8YtyCzUCsgqvFELSCrU+PsTs1A1IKNQNyCf8Eb/x5i4hDp/x+cVvjX5NS0ioUVAJqFNQCKhUUAaoVlAFqFdQA6h8Q9L4IXW7+pFC+1/GQQsdHjZMlQ48fhpF6TQ5+l1nNDr8TyY0O0RS5DQ8aF1jNDzUWeE0PflEQCh8ysH3IVfvN/+4S30f/WHr9A9oLdQ5fuixEJEQFchJKCnsP6LMdxCVEAv4R0soJPwE9DnIkQG9BBiAzoIwQHNhfCAYixcoXWnGQrrv8CsMjshRUCxE5IEFDMhS0AxEvIEFBshUUCxEG6XaNP51IVcAUVdyBZQtIVf0ZwnpikkDCiqQsaAoig8UgYUPSFpQNES0gYUJSFvQFERMgcUDWH9E/O2qxXe6zx+ZbhKIXtAqRTyB5Q6YYCAUiMMEVAqhDECymjh5yABZazwG/qyB2yMMFBAGSWMFFBGCL+HCijDhYqPIDttmFDvGXK/DRLGCyiDhBEDyhBhyIDSXxg0oPQWRg0oPYUGz5D7rY9Q/SUArusWhg4oPYSxA0qnMHrAn5vnDnjaMz7LZ8gdd7gINH2G3HH73AFPyx3wtF3ugKdtUwd82PHcZ/8SAP/dpg74sMXmt2+T6w58tOVqPZ2uV9z/Yd3W1tbW1tb2n+4H+V9b5Trw8sQAAAAASUVORK5CYII="/>
                        </Button>
                        <Button sx={{borderRadius:"50px", backgroundColor:"transparent", color:"black", marginLeft:"20px"}} variant="contained" color="success">
                        <img className={descriptionStyle.parentICON} src="data:image/png;base64,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"/>
                        <Link sx={{textDecoration:"none", color:"black"}} href="/">Home</Link>
                        </Button>   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDescription
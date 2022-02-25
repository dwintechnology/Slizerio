import { makeStyles } from '@mui/styles';

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
        justifyContent: "space-between"
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
        marginLeft: "50px"
    },
    movieTITLE: {
        fontSize: "31px",
        fontWeight: 200,
        lineHeight: 1.2,
        letterSpacing: "-0.5px",
        textTransform: "uppercase",
        marginBottom: "0.5rem"
    },
    genresTITLE: {
        color: "#243036",
        fontWeight: 700,
        textTransform: "uppercase",
        marginBottom: "12px",
        fontSize: "11px"
    },
    parentICON: {
        width: "20px",
        height: "20px"
    },
    section1Language: {
        fontWeight: 700,
        lineHeight: 1,
        textTransform: "uppercase",
        color: "#aebac1",
        fontSize: "11px"
    },
    parentPARAGRAPH: {
        fontSize: "11px",
        lineHeight: 1.8,
        color: "#444444",
        fontWeight: 400,
        marginBottom: "48px",
    },
    buttonsDIV: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px"
    },
    actorsIMG: {
        width: "50px",
        height: "50px",
        borderRadius: "20px",
        paddingBottom: "10px"
    },
    starsDIV: {
        display: "flex",
        alignItems: "center",
        fontSize: "1.3rem",
        lineHeight: 1,
        fontWeight: 700,
        color: "#384850"
    },
    RecommendationMoviesWrapper: {
        marginTop: '100px',
    },
    funcButton: {
        '&:hover': {
            color: '#fff',
            backgroundColor: '#253036'
        }
    },
    backButton: {
        '&:hover': {
            color: 'black',
            backgroundColor: 'transparent'
        }
    },
    "@media only screen and (max-width: 1000px)": {
        bigdiv: {
            display: "block",
        },
        divIMGCENTER: {
            display: "flex",
            justifyContent: "center"
        },
        moviesImg: {
            width: "300px",
            height: "400px"
        },
        bigDIV2: {
            marginLeft: "80px",
            width: "516px"
        }
    },
    trillerDiv: {
        marginTop: "-183px",
        position: "fixed",
        top: "50%",
        display: "flex",
        left: "50%",
        marginLeft: "-330px"
    },
    trillerTitle: {
        color: "black",
        cursor: "pointer",
        marginTop: "-35px"
    },
    "@media only screen and (max-width: 540px)": {
        bigDIV2: {
            width: "330px"
        }
    }
})

export default style
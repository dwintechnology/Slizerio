import { makeStyles } from '@mui/styles';

const style = makeStyles({
    parent: {
        display: "flex",
        marginTop: "50px"
    },
    parentImg: {
        width: "409px",
        borderRadius: "20px",
        height: "567px",
        objectFit: "cover",
    },
    actoresName: {
        marginLeft: "25px",
        textTransform: "uppercase",
        fontWeight: "200",
        fontSize: "50px"
    },
    birthday: {
        marginLeft: "25px",
        fontWeight: 700,
        lineHeight: 1,
        textTransform: "uppercase",
        color: "#aebac1",
        fontSize: "25px"
    },
    bio: {
        color: "#243036",
        fontWeight: 700,
        textTransform: "uppercase",
        marginBottom: "40px",
        fontSize: "20px",
        marginLeft: "25px",
    },
    bioText: {
        padding: "0px 100px 0px 0px",
        marginLeft: "25px",
        fontSize: "20px", marginLeft: "25px",
        lineHeight: 1.8,
        color: "#444444",
        fontWeight: 400,
        marginBottom: "48px",
    },
    backButton: {
        '&:hover': {
            color: 'black',
            backgroundColor: 'transparent'
        }
    },
})

export default style
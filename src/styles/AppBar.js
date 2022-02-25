import { makeStyles } from '@mui/styles';

const style = makeStyles({
    hovers: {
        '&:hover': {
            border: "1px solid white",
            borderRadius: "2rem"
        }
    },
    boxing: {
        display: "flex",
    },
    NONE: {
        display: "none"
    },
    titles: {
        color: "white"
    },
    closes: {
        display: "flex",
        justifyContent: "end"
    },
    closesBtn: {
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        fontSize: "15px"
    }
})

export default style
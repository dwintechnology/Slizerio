import { makeStyles } from '@mui/styles';

const style = makeStyles({
    hovers: {
        '&:hover': {
            border: "1px solid #516a74",
            borderRadius: "2rem"
        },
        '&:focus': {
            border: "1px solid #516a74",
            borderRadius: "2rem"
        },
    },
    hoverss: {
        '&:hover': {
            border: "1px solid #516a74",
            borderRadius: "2rem"
        }
    },
    positionNone: {
        '&::-webkit-scrollbar': {
            display: "none"
        },
        padding: "20px"
    },
    AppbarStyle: {
        display: "none"
    },

    "@media only screen and (max-width: 1000px)": {
        AppbarStyle: {
            display: "block"
        },
        mobileBox: {
            display: "none"
        },
        appBtn: {
            backgroundColor: "transparent",
            border: "none"
        }
    }
})


export default style
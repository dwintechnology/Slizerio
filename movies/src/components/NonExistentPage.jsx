import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

const style = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8%',
        width: '100%',
        '& img': {
            maxWidth: '100%',
            height: '35vh',
            marginBottom: '6rem',
        },
        '& h1':{
            fontSize: '37px',
            fontWeight: '100',
            letterSpacing: '1px',
            color: '#37474f',
            marginBottom: '60px',
        },
    }
},{
    name: 'NonExistentPage'
})


function NonExistentPage({setPage}) {
    const NonExistentPageStyle = style();

    return (
        <div className={NonExistentPageStyle.wrapper}>
            <h1>Something went wrong!</h1>
            <img src="https://movies.fidalgo.dev/static/media/error.cbc8724a.svg" alt="not found" />
            <Link onClick={()=>{setPage(1)}} to='/Popular'><button>HOME</button></Link>
        </div>
    )
}

export default NonExistentPage
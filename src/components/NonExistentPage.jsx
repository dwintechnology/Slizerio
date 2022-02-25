import { Link } from "react-router-dom";
import error from '../assets/error.svg'
import style from "../styles/NonExistentPage";


function NonExistentPage({ setPage }) {
    const NonExistentPageStyle = style();

    return (
        <div className={NonExistentPageStyle.wrapper}>
            <h1>Something went wrong!</h1>
            <img src={error} alt="not found" />
            <Link onClick={() => { setPage(1) }} to='/Popular'><button>HOME</button></Link>
        </div>
    )
}

export default NonExistentPage
import AlbumIcon from '@mui/icons-material/Album';
import { Link } from "react-router-dom";
import useStyle from '../styles/Genres';

function Genres({ genres }) {
    const genersStyle = useStyle();
    return (
        <div className={genersStyle.generes}>
            {genres.map((gener, index) => {
                return (
                    <div key={index} className={genersStyle.generesWrapper}>
                        <Link to={`/${gener.name}`} className={genersStyle.link} >
                            <AlbumIcon className={genersStyle.icons} />
                            <p key={gener.name}>
                                {gener.name}
                            </p>
                        </Link>
                    </div>

                )
            })}
        </div>
    )
}

export default Genres;
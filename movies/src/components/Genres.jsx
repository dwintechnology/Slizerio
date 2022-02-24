import { makeStyles } from '@mui/styles';
import AlbumIcon from '@mui/icons-material/Album';
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    generesWrapper: {
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            transform: 'translateY(-3px)',
            transition: 'all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s',
        }
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        color: '#546e7a',
        fontSize: '10px',
        fontWeight: '700',
        lineHeight: '1',
        textDecoration: 'none',
    },
    generes: {
        display: 'flex',
    },
    icons: {
        color: '#546e7a',
        fontSize: '11px',
        marginBottom: '1px',
        marginLeft: '8px',
        marginRight: '3px',
    },
}, {
    name: 'Generes'
})

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
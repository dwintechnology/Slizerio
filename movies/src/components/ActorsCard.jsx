import constants from "../utils/constants";
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    }
})
export default function ActorsCard() {
    const { id } = useParams();
    const [actor, setActor] = useState()

    const navigate = useNavigate();
    function getDATA() {

        fetch(`${constants.API_PATH}/person/${id}?api_key=${constants.API_KEY}`)
            .then((first) => { return first.json() })
            .then((last) => { setActor(last) })
    }

    useEffect(() => {
        getDATA()
    }, [])

    const actorsStyle = style()
    if (!actor) {
        return <Loading />
    }
    return (
        <>
            <div className={actorsStyle.parent}>
                <div>
                    <img className={actorsStyle.parentImg} src={actor?.profile_path === null ? 'https://movies.fidalgo.dev/static/media/person.fdbc4613.svg' : constants.BIG_IMG_PATH + actor.profile_path} />
                </div>
                <div>
                    <h1 className={actorsStyle.actoresName}>{actor.name}</h1>
                    <h1 className={actorsStyle.birthday}>{actor?.birthday}</h1>
                    <h1 className={actorsStyle.bio}>The Biography</h1>
                    <p className={actorsStyle.bioText}>
                        {actor?.biography}
                    </p>
                    <Link onClick={() => navigate(-1)} sx={{ textDecoration: "none", color: "white", alignItems: "center", display: "flex", justifyContent:"end", marginRight:"75px" }}>
                        <Button sx={{ borderRadius: "50px", backgroundColor: "#253036", color: "white", marginLeft: "20px", border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "82px", height: "30px" }} variant="contained" color="success">
                            <ArrowBackIcon />
                            Back
                        </Button>
                    </Link>
                </div>

            </div>

        </>
    );
};
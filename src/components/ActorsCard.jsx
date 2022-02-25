import constants from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import person from '../assets/person.svg'
import style from "../styles/ActorsCard";

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
                    <img className={actorsStyle.parentImg} src={actor?.profile_path === null ? person : constants.BIG_IMG_PATH + actor.profile_path} />
                </div>
                <div>
                    <h1 className={actorsStyle.actoresName}>{actor.name}</h1>
                    <h1 className={actorsStyle.birthday}>{actor?.birthday}</h1>
                    <h1 className={actorsStyle.bio}>The Biography</h1>
                    <p className={actorsStyle.bioText}>
                        {actor?.biography}
                    </p>
                    <Link onClick={() => navigate(-1)} sx={{ textDecoration: "none", color: "white", alignItems: "center", display: "flex", justifyContent: "end", marginRight: "75px" }}>
                        <Button className={actorsStyle.backButton} sx={{ borderRadius: "50px", backgroundColor: "#253036", color: "white", marginLeft: "20px", border: "1px solid #242f34", fontSize: "8px", fontWeight: 400, width: "82px", height: "30px" }} variant="contained" color="success">
                            <ArrowBackIcon />
                            Back
                        </Button>
                    </Link>
                </div>

            </div>

        </>
    );
};
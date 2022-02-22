import constants from "../utils/constants";
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";

const style = makeStyles({
    parent: {
        display: "flex",
        marginTop: "50px"
    },
    parentImg: {
        width: "409px",
        borderRadius: "20px",
        height: "567px",
        objectFit:"cover",
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
    bioText:{
        padding:"0px 100px 0px 0px",
        marginLeft: "25px",
        fontSize: "20px",marginLeft: "25px",
        lineHeight: 1.8,
        color: "#444444",
        fontWeight: 400,
        marginBottom: "48px",
    }
})
export default function ActorsCard({ people }) {
    const Api_key = constants.API_KEYS
    const Api_path = constants.API_PATH
    let [castobj, setCastObj] = useState()
    function getDATA() {
        fetch(`${Api_path}/person/${people.id}?api_key=${Api_key}`)
            .then((first) => { return first.json() })
            .then((last) => { setCastObj(last) })
    }
    useEffect(() => {
        getDATA()
    }, [])
    const actorsStyle = style()
    const Img_path = constants.BIG_IMG_PATH
    console.log(castobj)
    return (
        <div className={actorsStyle.parent}>
            <div>
                <img className={actorsStyle.parentImg} src={people.profile_path === null ? 'https://movies.fidalgo.dev/static/media/person.fdbc4613.svg' : Img_path + people.profile_path} />
            </div>
            <div>
                <h1 className={actorsStyle.actoresName}>{people.original_name}</h1>
                <h1 className={actorsStyle.birthday}>{castobj?.birthday}</h1>
                <h1 className={actorsStyle.bio}>The Biography</h1>
                <p className={actorsStyle.bioText}>
                    {castobj?.biography}
                </p>
            </div>
        </div>

    );
};
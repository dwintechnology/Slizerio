import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import constants from "../utils/constants";
const style = makeStyles({
    actorsIMG:{
        borderRadius:"50%",
        width:"50px",
        height:"50px",
        objectFit:"cover",
        padding:"5px"
    }
})
export default function Slider({ id, setPeople }) {
    const Api_key = constants.API_KEYS
    const Api_path = constants.API_PATH
    const Img_path = constants.SMALL_IMG_PATH
    const SlideStyle = style()
    let [castobj, setCastObj] = useState()
   
    function getDATA(){
        fetch(`${Api_path}/movie/${id}/credits?api_key=${Api_key}`)
        .then((first) => { return first.json() })
        .then((last) => { setCastObj(last) })
    }
    useEffect(()=>{
        getDATA()
    }, [])
    let u = castobj?.cast?.map((e, index)=>{
        return(
            <>
            <Link to={`/Person/${e.id}`}>
            <img onClick={()=>{setPeople(e)}} key={index} className={SlideStyle.actorsIMG} src= {e.profile_path === null ? 'https://movies.fidalgo.dev/static/media/person.fdbc4613.svg' :Img_path  + e.profile_path }/>
            
            </Link>
            </>
        )
    })
        return (
            <div>
                {u}
            </div>
        )
}
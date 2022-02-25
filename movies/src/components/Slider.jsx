import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import constants from "../utils/constants";
import person from '../assets/person.svg'
import style from "../styles/Slider";

export default function Slider({ id }) {
  const SlideStyle = style()
  const nav = useNavigate()
  let [castobj, setCastObj] = useState()

  function getDATA() {
    fetch(`${constants.API_PATH}/movie/${id}/credits?api_key=${constants.API_KEY}`)
      .then((first) => { return first.json() })
      .then((last) => { setCastObj(last) })
  }

  useEffect(() => {
    getDATA()
  }, [])

  return (

    <div className={SlideStyle.actorsDIV}>
      {
        castobj?.cast?.map((e, index) => {
          castobj.cast.length = 8
          return (
            <div key={e.id}>

              <img onClick={() => {
                nav(`/Person/${e.id}`)
              }} className={SlideStyle.actorsIMG} src={e.profile_path === null ? person : constants.SMALL_IMG_PATH + e.profile_path} />

            </div>


          )
        })

      }

    </div>

  )
}
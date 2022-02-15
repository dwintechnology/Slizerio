import { useEffect, useState } from "react"
import constants from "../utils/constants";
import { Link } from "react-router-dom";

function Home({ setObj }) {
    const [data, setData] = useState();
    const [page, setPage] = useState(1)

    function LoadMovie() {
        setPage(page + 1)
        getMovies(page + 1)
    }

    function LoadPreviousMovies() {
        setPage(page - 1)
        getMovies(page - 1)
    }

    function getMovies(page) {
        fetch(`${constants.API_PATH}/movie/popular?api_key=${constants.API_KEY}c&language=en-US&page=${page}`)
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }

    useEffect(() => {
        getMovies(page)
    }, [])



    let items = data?.results.map((item, index) => {
        return (
            <div key={index}>
                <Link onClick={() => {
                    setObj(data)

                }
                } to={`/film_About/${index}`}>
                    {item.title}
                    <img src={`${constants.SMALL_IMG_PATH}${item.poster_path}`} alt="#" />
                </Link>
            </div>
        )
    })


    return (
        <div>
            {items}
            <button onClick={LoadPreviousMovies}>{`Page ${page - 1}`}</button>
            <button onClick={LoadMovie}>{`Page ${page + 1}`}</button>
        </div>
    )
}

export default Home
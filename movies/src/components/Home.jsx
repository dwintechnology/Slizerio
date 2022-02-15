import { useEffect, useState } from "react"
import constants from "../utils/constants";
import { Link } from "react-router-dom";

function Home({ setObj }) {
    const [data, setData] = useState();
    const [itemsTitle, setItemsTitle] = useState();
    const [page, setPage] = useState(2)

    function loadMovie() {
        setPage(page + 1)
        fetch(`${constants.API_PATH}/movie/popular?api_key=${constants.API_KEY}c&language=en-US&page=${page}`)
            .then((d) => {
                return d.json()
            })
            .then((dataJson) => {
                let dataCopy = JSON.parse(JSON.stringify(data))
                dataJson.results.forEach(element => {
                    dataCopy.results.push(element)
                });
                setData(dataCopy)
            })
    }


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=e81b5d12d52c0de91f235d90e155683c&language=en-US&page=1')
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }, [])
    useEffect(() => {
        setItemsTitle(items)
        console.log(data)
    }, [data])


    let items = data?.results.map((item, index) => {
        return (
            <div key={index}>
                <Link onClick={
                    () => {

                        // setTitle(item.title)
                        // setDate(item.release_date)
                        // setOwer(item.overview)
                        setObj(data)
                    }
                } to={`/film_About/${index}`}>{item.title}</Link>
            </div>
        )
    })


    return (
        <div>
            {itemsTitle}

            {/* <Button setData={setData} data={data}/> */}
            <button onClick={loadMovie}>Learn More</button>
        </div>
    )
}

export default Home
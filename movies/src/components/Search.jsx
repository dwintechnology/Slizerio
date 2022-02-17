import { useState } from "react";
import constants from "../utils/constants";
import TextField from '@mui/material/TextField';


function Search({ setData }) {
    const [inputValue, setInputValue] = useState()

    function SearchMovies() {
        fetch(`${constants.API_PATH}/search/movie?api_key=${constants.API_KEY}&query=${inputValue}`)
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }

    return (
        <form action="submit" onSubmit={(e)=>{
            e.preventDefault()
            setInputValue(e.target[0].value)
            SearchMovies()
        }}>
            <TextField
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
            />
        </form>
    )
}

export default Search
import constants from "../utils/constants";
import TextField from '@mui/material/TextField';

function Search({ setData }) {
    
    function SearchMovies(searchQuery) {
        fetch(`${constants.API_PATH}/search/movie?api_key=${constants.API_KEY}&query=${searchQuery}`)
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }

    return (
        <form action="submit" onSubmit={(e)=>{
            e.preventDefault()
            SearchMovies(e.target[0].value)
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
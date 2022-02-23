import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

function Search({ setSearchParam }) {
    const navigate = useNavigate();

    return (
        <form action="submit" onSubmit={(e)=>{
            e.preventDefault()
            setSearchParam(e.target[0].value)
            return navigate(`/search/${e.target[0].value}`);
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
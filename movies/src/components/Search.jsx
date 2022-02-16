import { useRef, useState } from "react";
import { makeStyles } from '@mui/styles';
import constants from "../utils/constants";
import SearchIcon from '@mui/icons-material/Search';

const useStyle = makeStyles({

    button: {
        margin: '0',
        width: '37px',
        border: 'none',
        height: '37px',
        padding: '0',
        borderRadius: '50%',
        backgroundColor: '#263238',
        paddingTop: '3px',
        cursor: 'pointer',
        position: 'absolute',
        zIndex: '5',
        top: '1px',
        marginLeft: '1px',
    },

    "@keyframes InputEffectExit": {
        "0%": {
            display: "block !important",
            width: '0px'
        },
        "100%": {
            width: '218px'
        },
    },

    inputEffect: {
        animation: `$InputEffectExit 1000ms`,
        animationFillMode: 'forwards',
    },

}, {
    name: 'Search'
})





function Search({ setData }) {
    const [inputValue, setInputValue] = useState()
    const searchStyle = useStyle()
    const inputRef = useRef()
    const [clickCount, setClickCount] = useState(0)


    function SearchMovies() {
        fetch(`${constants.API_PATH}/search/movie?api_key=e366d974f73ae203397850eadc7bce1f&query=${inputValue}`)
            .then((a) => { return a.json() })
            .then((b) => { setData(b) })
    }

    return (
        <form type="submit">
            <button className={searchStyle.button} onClick={(event) => {
                event.preventDefault()
                if (clickCount < 1) {
                    setClickCount(clickCount + 1)
                    inputRef.current.className = searchStyle.inputEffect
                }else if(inputValue){
                    SearchMovies()
                    inputRef.current.className = ''
                    inputRef.current.value = ''
                    setClickCount(clickCount - 1)
                }
            }}>
                <SearchIcon sx={{ color: '#fff' }} />
            </button>
            <input style={{ height: '37px', borderRadius: '37px', border: 'none', backgroundColor: '#263238', paddingLeft: '39px', color: '#fff', position: 'absolute', zIndex: '4', width: '0px' }} ref={inputRef} className={searchStyle.Input} type="text" onChange={(event) => { setInputValue(event.target.value) }} />

        </form>

    )
}

export default Search
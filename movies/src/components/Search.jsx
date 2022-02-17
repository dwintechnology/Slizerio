import { useRef, useState } from "react";
import { makeStyles } from '@mui/styles';
import constants from "../utils/constants";
import SearchIcon from '@mui/icons-material/Search';

const useStyle = makeStyles({

    button: {
        top: '1px',
        width: '37px',
        border: 'none',
        cursor: 'pointer',
        height: '37px',
        margin: '0',
        padding: '0',
        zIndex: '5',
        marginLeft: '1px',
        paddingTop: '3px',
        borderRadius: '50%',
        right: '0',
        position: 'absolute',
        backgroundColor: '#263238',
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
        <form style={{width: '59px', position: 'relative'}} type="submit">
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
            <input style={{ height: '37px', borderRadius: '37px', border: 'none', backgroundColor: 'rgb(38, 50, 56)', paddingRight: "39px", paddingLeft: '20px', color: 'rgb(255, 255, 255)', position: 'absolute', zIndex: '4', width: '0px', position: 'absolute', right: '0' }} ref={inputRef} className={searchStyle.Input} type="text" onChange={(event) => { setInputValue(event.target.value) }} />

        </form>

    )
}

export default Search
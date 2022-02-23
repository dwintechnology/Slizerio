import { makeStyles } from '@mui/styles'
import load from '../assets/load.gif'

const useStyle = makeStyles({
    gif: {
        width: '9%',
        position: 'fixed',
        left: '50%',
        top: '50%',
        marginLeft: '-4.5%',
    },
}, {
    name: 'Loading'
})

export default function Loading(){
    const LoadingStyle = useStyle()
    return (

        <>
        <img className={LoadingStyle.gif} src={load} alt="loading ..." />
        </>
    )
}
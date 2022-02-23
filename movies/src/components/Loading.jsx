import { makeStyles } from '@mui/styles'
import load from '../assets/load.gif'

const useStyle = makeStyles({
    gif: {
        width: '100%',
        height: 'auto',
        padding: '19% 41% 0% 47%',
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
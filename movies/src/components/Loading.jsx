import load from '../assets/load.gif'
import useStyle from '../styles/Loading'

export default function Loading() {
    const LoadingStyle = useStyle()
    return (
        <>
            <img className={LoadingStyle.gif} src={load} alt="loading ..." />
        </>
    )
}
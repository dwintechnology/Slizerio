import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const style1 = makeStyles({
    im: {
        backgroundImage: `url('https://www.nawpic.com/media/2020/harry-potter-nawpic-13.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        padding: "340px 0px 10px 0px",
        display: "flex",
        justifyContent: "center"
    },
    te: {
        backgroundColor: "black",
        width: "500px",
        height: 'auto',
        color: "white",

    },
    text: {
        color: "white",
        textAlign: "center",
    },
    distr: {
        display: "flex",
        justifyContent: "space-between"
    },
    footer: {
        padding: "250px 0px 350px 0px",
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundImage: `url('http://www.xaviermartinvfx.com/wp-content/uploads/2015/01/Lightning_detail.png')`,
    },
    footerTEXT: {
        fontSize: "100px",
        color: "white",
        display:"block"
    },
    footerIMG:{
        position:"absolute",
        top:"605px",
        right:"0",
        transform: `rotate(90deg)`,
        animation: `$example 400ms  linear 2s infinite alternate`,
        zIndex:"0.1"

    },
    '@keyframes example':{
        "0%": {
            opacity: 1,
            // width:"500px"
           
          },
          "20%":{
            opacity: 0.8,
          },
          "40%":{
            opacity: 0.6,
          },
          "60%":{
            opacity: 0.4,
          },
          "80%":{
            opacity: 0.2,
          },
          "100%": {
            opacity: 0,
            // width:"800px"
          }
    }
})
function MovieDescription({ title, sr, distr, date }){
    const a = style1()
    return (
        <div >
            <Link to="/">HOME</Link>
            <div className={a.im}>
               
                <div className={a.te}>
                    
                    <h2 className={a.text} >{title}</h2>
                    <div className={a.distr} >
                        <img src={sr} />
                        <p>
                            {distr}
                        </p>
                    </div>
                    <h2 className={a.text}>DATE: {date}</h2>
                </div>
            </div>
            <div className={a.footer}>
            
                <h1 className={a.footerTEXT}>{title}</h1>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tCuRbIInrOo" title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <img className={a.footerIMG} src="https://www.pngkey.com/png/full/25-250270_lightning-strike-png-photo-lightning.png"/>
        </div>
    )
}
export default MovieDescription
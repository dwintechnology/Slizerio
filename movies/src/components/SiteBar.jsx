import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import AlbumIcon from '@mui/icons-material/Album';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Appbar from './AppBar';
import { Link } from "react-router-dom";
const drawerWidth = 240;
const style = makeStyles({
        hovers:{
            '&:hover':{
                border:"1px solid #516a74",
                borderRadius: "2rem"
            },
            '&:target':{
              border:"1px solid #516a74",
              borderRadius: "2rem"
          }
        },
        // active:{
        //     border:"1px solid #516a74",
        //     borderRadius: "2rem"
        
        // },
        positionNone:{
            '&::-webkit-scrollbar':{
              display:"none"
            },
            padding:"20px"
          },
          AppbarStyle:{
            display:"none"
          },
          
          "@media only screen and (max-width: 1000px)":{
            AppbarStyle:{
              display:"block"
            },
            mobileBox:{
              display:"none"
            },
            appBtn:{
              backgroundColor:"transparent",
              border:"none"
            }
          }
})
export default function SiteBar({setTitle}) {
  // let [boolean ,setBollean] = React.useState(false)
  let [active, setActive] = React.useState(false)
  console.log(active)
  const styles = style()
    return (
      <>
      <AppBar className={styles.AppbarStyle} position="fixed" sx={{ zIndex: "auto", backgroundColor:"#b0bec5"}}>
        <button className={styles.appBtn} onClick={
          ()=>{
            setActive(true)
          }
         
        }><MenuIcon/></button>
        
        </AppBar>
        {(active) && <Appbar setActive={setActive} active={active}/> }
        <Box className={styles.mobileBox} sx={{ display: 'flex'}}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', position:"unset"},
          }}
        >
          <Box className={styles.positionNone} sx={{ overflow: 'auto'}}>
            <List  >
            <div style={{display:"flex", justifyContent:"center"}}>
            <img style={{width:"100px", height:"100px"}} src="	https://movies.fidalgo.dev/static/media/logo.bcc287ea.svg"/>
            </div>
            <h5>DISCOVER</h5>
              {['Popular', 'Top Rated', 'Upcoming'].map((text, index) => (
                <Link  key={index} to={`/${text}`} onClick={(e)=>{
                  setTitle(text)
                  // e.target.className=styles.active
                }}>
                <ListItem  button className={styles.hovers}   >
                  <ListItemIcon>
                  {index % 3 === 0 ?  <FavoriteIcon/> :index % 2 !== 0 ? <AirlineStopsIcon/> : <UpcomingIcon/>}
                    
                  </ListItemIcon>
                  
                  <ListItemText sx={{color:"#516a74"}} primary={text} />
                    
                </ListItem>
                </Link>
              ))}
            </List>
            <List>
            <h5>GENRES</h5>
              {['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'].map((text, index) => (
                <ListItem button className={styles.hovers}  sx={{color:"#516a74" , fontSize: "1.2rem", fontWeight: 600, lineHeight: 1}} key={text}>
                  <ListItemIcon>
                    <AlbumIcon/>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
      </>
    );
  }
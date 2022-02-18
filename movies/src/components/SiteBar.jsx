import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import AlbumIcon from '@mui/icons-material/Album';
import { makeStyles } from '@mui/styles';
const drawerWidth = 240;
const style = makeStyles({
        hovers:{
            '&:hover':{
                border:"1px solid #516a74",
                borderRadius: "2rem"
            }
        },
        positionNone:{
            '&::-webkit-scrollbar':{
              display:"none"
            },
            padding:"20px"
          },
})
export default function SiteBar({setObj}) {
    const styles = style()
    return (
      <Box sx={{ display: 'flex'}}>
         
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box'},
          }}
        >
          <Toolbar />
          <Box className={styles.positionNone} sx={{ overflow: 'auto'}}>
            <List  >
            <div style={{display:"flex", justifyContent:"center"}}>
            <img style={{width:"100px", height:"100px"}} src="	https://movies.fidalgo.dev/static/media/logo.bcc287ea.svg"/>
            </div>
            <h5>DISCOVER</h5>
              {['Popular', 'Top Rated', 'Upcoming'].map((text, index) => (
                <ListItem  button className={styles.hovers}  key={text} >
                  <ListItemIcon>
                  {index % 3 === 0 ?  <FavoriteIcon/> :index % 2 !== 0 ? <AirlineStopsIcon/> : <UpcomingIcon/>}
                    
                  </ListItemIcon>
                  <ListItemText sx={{color:"#516a74"}} primary={text} />
                </ListItem>
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
    );
  }
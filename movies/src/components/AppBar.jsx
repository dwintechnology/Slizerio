import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import AlbumIcon from '@mui/icons-material/Album';
import style from '../styles/AppBar';

const drawerWidth = 240;


export default function Appbar({ setActive, active }) {
  const styles = style()
  return (
    <>
      <Box className={!active ? styles.NONE : styles.boxing} >
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,

            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', zIndex: "10" },
          }}
        >
          <Box sx={{ overflow: 'auto', backgroundColor: "#37474f", padding: "20px" }}>
            <div className={styles.closes}>
              <button className={styles.closesBtn} onClick={
                () => {
                  setActive(false)
                }
              }>X</button>
            </div>
            <List  >
              <h5 className={styles.titles}>DISCOVER</h5>
              {['Popular', 'Top Rated', 'Upcoming'].map((text, index) => (
                <ListItem button className={styles.hovers} key={text} >
                  <ListItemIcon>
                    {index % 3 === 0 ? <FavoriteIcon /> : index % 2 !== 0 ? <AirlineStopsIcon /> : <UpcomingIcon />}
                  </ListItemIcon>
                  <ListItemText sx={{ color: "#516a74" }} primary={text} />
                </ListItem>
              ))}
            </List>
            <List>
              <h5 className={styles.titles}>GENRES</h5>
              {['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'].map((text, index) => (
                <ListItem button sx={{ color: "#516a74", fontSize: "1.2rem", fontWeight: 600, lineHeight: 1 }} key={text}>
                  <ListItemIcon>
                    <AlbumIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  )
}
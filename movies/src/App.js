import './App.css';
import Movies from './components/Movies';
import { Route, Routes } from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import SiteBar from './components/SiteBar';
import { Grid } from '@mui/material';
import { useState } from "react";
import constants from './utils/constants';

function App() {
  const [obj, setObj] = useState()
  const [title, setTitle] = useState("Popular")
  
  return (
    <div className="App">
      <Grid container columns={{ xs: 20 }} columnSpacing={1}>
        <Grid item xs={4} >
          <SiteBar setTitle={setTitle}/>
        </Grid>
        <Grid item xs={16} >
          <Routes>
            <Route path="/" element={<Movies title={title} setObj={setObj} path={constants.PAGES.popular.url} />} />
            <Route path="/Popular" element={<Movies title={title} setObj={setObj} path={constants.PAGES.popular.url} />} />
            <Route path="/Top%20Rated" element={<Movies title={title} setObj={setObj} path={constants.PAGES.rated.url} />} />
            <Route path="/Upcoming" element={<Movies title={title} setObj={setObj} path={constants.PAGES.upcoming.url} />} />
            <Route path="/film_About/:id" element={<MovieDescription obj={obj} />} />
          </Routes>
        </Grid>
      </Grid>

    </div>

  );
}

export default App;

import './App.css';
import Movies from './components/Movies';
import { Route, Routes } from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import SiteBar from './components/SiteBar';
import { Grid } from '@mui/material';
import { useState } from "react";
import constants from './utils/constants';
import NonExistentPage from './components/NonExistentPage';

function App() {
  const [obj, setObj] = useState()
  const [title, setTitle] = useState("Popular");
  const [searchPath, setSearchPath] = useState();
  console.log(searchPath)
  
  return (
    <div className="App">
      <Grid container columns={{ xs: 20 }} columnSpacing={1}>
        <Grid item xs={4} >
          <SiteBar setTitle={setTitle}/>
        </Grid>
        <Grid item xs={16}>
          <Routes>
            <Route path="/" element={<Movies title={title} setObj={setObj} path={constants.PAGES.popular.url} setSearchPath={setSearchPath} />} />
            <Route path="/Popular" element={<Movies title={title} setObj={setObj} path={constants.PAGES.popular.url} setSearchPath={setSearchPath} />} />
            <Route path="/Top%20Rated" element={<Movies title={title} setObj={setObj} path={constants.PAGES.rated.url} setSearchPath={setSearchPath} />} />
            <Route path="/Upcoming" element={<Movies title={title} setObj={setObj} path={constants.PAGES.upcoming.url} setSearchPath={setSearchPath} />} />
            <Route path="/search/*" element={<Movies title='Search' setObj={setObj} path={`${constants.API_PATH}/search/movie?api_key=${constants.API_KEY}&query=${searchPath}&page=`} setSearchPath={setSearchPath} />} />
            <Route path="/film_About/:id" element={<MovieDescription obj={obj} />} />
            <Route path="/Something_went_wrong" element={<NonExistentPage/>} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

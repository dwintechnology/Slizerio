import './App.css';
import Movies from './components/Movies';
import { Route, Routes } from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import SiteBar from './components/SiteBar';
import { Grid } from '@mui/material';
import { useState } from "react";
import constants from './utils/constants';
import ActorsCard from './components/ActorsCard';

function App() {
  const [obj, setObj] = useState()
  const [title, setTitle] = useState("Popular")
  const [people, setPeople] = useState()
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
            <Route path="/Action" element={<Movies title={title} setObj={setObj} path={constants.PAGES.action.url} />} />
            <Route path="/Adventure" element={<Movies title={title} setObj={setObj} path={constants.PAGES.adventure.url} />} />
            <Route path="/Animation" element={<Movies title={title} setObj={setObj} path={constants.PAGES.animation.url} />} />
            <Route path="/Comedy" element={<Movies title={title} setObj={setObj} path={constants.PAGES.comedy.url} />} />
            <Route path="/Crime" element={<Movies title={title} setObj={setObj} path={constants.PAGES.crime.url} />} />
            <Route path="/Documentary" element={<Movies title={title} setObj={setObj} path={constants.PAGES.documentary.url} />} />
            <Route path="/Drama" element={<Movies title={title} setObj={setObj} path={constants.PAGES.drama.url} />} />
            <Route path="/Family" element={<Movies title={title} setObj={setObj} path={constants.PAGES.family.url} />} />
            <Route path="/Fantasy" element={<Movies title={title} setObj={setObj} path={constants.PAGES.fantasy.url} />} />
            <Route path="/History" element={<Movies title={title} setObj={setObj} path={constants.PAGES.history.url} />} />
            <Route path="/Horror" element={<Movies title={title} setObj={setObj} path={constants.PAGES.horror.url} />} />
            <Route path="/Music" element={<Movies title={title} setObj={setObj} path={constants.PAGES.music.url} />} />
            <Route path="/Mystery" element={<Movies title={title} setObj={setObj} path={constants.PAGES.mystery.url} />} />
            <Route path="/Romance" element={<Movies title={title} setObj={setObj} path={constants.PAGES.romance.url} />} />
            <Route path="/Science%20Fiction" element={<Movies title={title} setObj={setObj} path={constants.PAGES.science_fiction.url} />} />
            <Route path="/TV%20Movie" element={<Movies title={title} setObj={setObj} path={constants.PAGES.tv_movie.url} />} />
            <Route path="/Thriller" element={<Movies title={title} setObj={setObj} path={constants.PAGES. thriller.url} />} />
            <Route path="/War" element={<Movies title={title} setObj={setObj} path={constants.PAGES.war.url} />} />
            <Route path="/Western" element={<Movies title={title} setObj={setObj} path={constants.PAGES.western.url} />} />

            <Route path="/film_About/:id" element={<MovieDescription obj={obj} setPeople={setPeople} />} />
            <Route path="/Person/:id" element={<ActorsCard people={people}/> }/>

          </Routes>
        </Grid>
      </Grid>

    </div>

  );
}

export default App;

import './App.css';
import Movies from './components/Movies';
import { Route, Routes } from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import SiteBar from './components/SiteBar';
import { Grid } from '@mui/material';
import constants from './utils/constants';
import ActorsCard from './components/ActorsCard';

function App() {
  return (
    <div className="App">
      <Grid container columns={{ xs: 20 }} columnSpacing={1}>
        <Grid item xs={4} >
          <SiteBar />
        </Grid>
        <Grid item xs={16} >
          <Routes>
            <Route path="/" element={<Movies title={constants.PAGES.popular.title} path={constants.PAGES.popular.url} />} />
            {
              Object.values(constants.PAGES).map((page) => {
                return <Route key={page.route} path={page.route} element={<Movies title={page.title} path={page.url} />} />
              })
            }
            <Route path="/film_About/:id" element={<MovieDescription />} />
            <Route path="/Person/:id" element={<ActorsCard />} />
          </Routes>
        </Grid>
      </Grid>

    </div>

  );
}

export default App;

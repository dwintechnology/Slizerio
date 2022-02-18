import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes, Link } from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import { useEffect, useState } from "react"
import SiteBar from './components/SiteBar';
import { Grid } from '@mui/material';

function App() {
  // const [title, setTitle] = useState()
  // const [date, setDate] = useState()
  // const [ower, setOwer] = useState()
  const [obj, setObj] = useState()
  return (
    <div className="App">
      <Grid container columns={{xs:20}} columnSpacing={1}>
      <Grid  item xs={4} >
      <SiteBar/>
            </Grid>
            <Grid  item xs={16} >
            <Routes>
        <Route path="/" element={<Home setObj={setObj}/>} />
        <Route path="/film_About/:id" element={<MovieDescription obj={obj}/>} />
      </Routes>
            </Grid>
            </Grid>
     
    </div>
  
  );
}

export default App;

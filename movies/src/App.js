import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes, Link } from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import { useEffect, useState } from "react"
import SiteBar from './components/SiteBar';

function App() {
  // const [title, setTitle] = useState()
  // const [date, setDate] = useState()
  // const [ower, setOwer] = useState()
  const [obj, setObj] = useState()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SiteBar setObj={setObj}/>} />
        <Route path="/film_About/:id" element={<MovieDescription obj={obj}/>} />
      </Routes>
    </div>
  
  );
}

export default App;

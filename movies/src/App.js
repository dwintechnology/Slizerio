import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes, Link } from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import { useEffect, useState } from "react"

function App() {
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [ower, setOwer] = useState()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setTitle={setTitle} setDate={setDate} setOwer={setOwer}/>} />
        <Route path="/film_About" element={<MovieDescription title={title} date={date} distr={ower}/>} />
      </Routes>
    </div>
  
  );
}

export default App;

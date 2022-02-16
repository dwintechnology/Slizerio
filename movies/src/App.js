import './App.css';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import { useState } from "react"

function App() {
  const [obj, setObj] = useState()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setObj={setObj}/>} />
        <Route path="/film_About/:id" element={<MovieDescription obj={obj}/>} />
      </Routes>
    </div>
  
  );
}

export default App;

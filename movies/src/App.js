import './App.css';
import Movies from './components/Movies';
import { Route, Routes} from "react-router-dom";
import MovieDescription from './components/MovieDescription';
import { useState } from "react";
import constants from './utils/constants';

function App() {
  const [obj, setObj] = useState()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies setObj={setObj} path={constants.PAGES.popular.url}/>} />
        <Route path="/film_About/:id" element={<MovieDescription obj={obj}/>} setObj={setObj}/>
      </Routes>
    </div>
  
  );
}

export default App;

import './App.css';
import Layout from './components/Layout';
import Main from './components/Main';
import MoviePage from './components/MoviePage';
import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom';

function App() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('James+Bond')

    const getMovies = async() =>{
        const response = await fetch(`http://www.omdbapi.com/?apikey=8fa4660f&s=${search}&type=movie`)
        const data = await response.json()
        console.log(data.Search)
        if(search.length > 2){
          setMovies(data.Search)
        }
    }

    useEffect(() =>{
        getMovies()
    },[])

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Main search={search} movies={movies} getMovies={getMovies} setSearch={setSearch}/>}/>
        <Route path=':slug' element={<MoviePage movies={movies}/>}/>
      </Route>
    </Routes>
  )
}

export default App;

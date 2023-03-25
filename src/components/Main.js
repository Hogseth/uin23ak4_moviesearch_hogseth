import { useEffect, useState } from "react"
import MovieCard from './MovieCard'
import SearchResults from "./SearchResults"



export default function Main(){
    // 8fa4660f

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('James+Bond')

    const getMovies = async() =>{
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8fa4660f&s=${search}&type=movie`)
        const data = await response.json()
        setMovies(data.Search) 
    }
    useEffect(() =>{
        getMovies()
    },[])

    return(
        <>
        <SearchResults setSearch={setSearch} getMovies={getMovies} />
        <section className="movies">
            {movies.map((m, index) => {
                return <MovieCard index={index} setSearch={setSearch} title={m.Title} image={m.Poster === "N/A" ? "https://placehold.co/300x400?text=James+Bond+Poster" : m.Poster} year={m.Year} />
            })}
        </section>
        </>
    )
}
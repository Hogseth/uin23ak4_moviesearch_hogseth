import MovieCard from './MovieCard'
import SearchResults from "./SearchResults"

export default function Main({movies,getMovies,setSearch}){


    return(
        <>
        <SearchResults setSearch={setSearch} getMovies={getMovies} movies={movies}/>
        <section className="movies">
            {movies.map((m, index) => {
                return <MovieCard key={index} setSearch={setSearch} title={m.Title} image={m.Poster === "N/A" ? "https://placehold.co/300x400?text=James+Bond+Poster" : m.Poster} year={m.Year} />
            })}
        </section>
        </>
    )
}
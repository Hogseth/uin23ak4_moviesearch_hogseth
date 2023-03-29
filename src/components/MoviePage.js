import { useParams } from "react-router-dom"
export default function MoviePage({movies}){
    
    const {slug} = useParams()
    const movie = movies.find((movie) => movie.Search?.Title.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(slug)
    console.log(movies)
    
    return(
        <>
        <section className='movie-info'>
        <h2>{movie?.Title}</h2>
        <p>Release year: {movie?.Year}</p>
        </section>
        <img src={movie?.Poster}></img>
        </>
    )
}
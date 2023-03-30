import { useParams } from "react-router-dom"
export default function MoviePage({movies}){
    console.log(movies)
    const {slug} = useParams()
    const movie = movies.find((movie) => movie.Title.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(movie)
    const imdb = "https://www.imdb.com/title/"+movie?.imdbID+"/?ref_=nv_sr_srsg_3"

    return(
        <article className="movie-article">
            <section className='movie-info'>
                <h2>{movie?.Title}</h2>
                <p>Release year: {movie?.Year}</p>
                <p>Read more at IMDB: <a href={imdb}>{movie?.Title}</a></p>
               
            </section>
            <img src={movie?.Poster}></img>
        </article>
    )
}
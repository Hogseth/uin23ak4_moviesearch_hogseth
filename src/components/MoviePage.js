export default function MoviePage({title,image,released,runtime,genre,director,plot}){
    return(
        <article className="movie">
            <h2>{title}</h2>
            <img src={image} alt="poster-image"></img>
            <p>Released: {released}</p>
            <p>Runtime: {runtime}</p>
            <p>Genre: {genre}</p>
            <p>Director: {director}</p>
            <text>Plot: {plot}</text>
        </article>
    )
}
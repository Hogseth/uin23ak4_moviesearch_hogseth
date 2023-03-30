export default function MovieCard({title,image,year,index}){
    return(
        <div className="moviecard" key={index}>
        <h2>{title}</h2>
        <img src={image} alt=""></img>
        <p>Release year: {year}</p>
        </div>
    )
}
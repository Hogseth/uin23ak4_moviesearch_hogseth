
export default function SearchResults({getMovies,setSearch,movies}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    return (
        <section className="searchbar">
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Fast and Furious" onChange={handleSearch}  />
            <button type="submit" onClick={getMovies}>Search!</button>
        </form>
        </section>
    )
}
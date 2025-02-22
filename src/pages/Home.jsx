import MovieCard from "../component/MovieCard"
import "../css/Home.css"
import { useState, useEffect } from "react"
import { getPopularMovies, searchPopularMovies } from "../services/api"

function Home() {

    const [searchMovies, setSearchMovies] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadPopularMovies = async () => {
            if (searchMovies.trim() === "") {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } else {
                const searchQuery = await searchPopularMovies(searchMovies);
                setMovies(searchQuery)
            }
        }

        loadPopularMovies();
    }, [searchMovies])

    const handleSearch = async (e) => {
        e.preventDefault();

        if(searchMovies.trim() === "") {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        }

        const searchQuery = await searchPopularMovies(searchMovies);
        setMovies(searchQuery)
    }

    return (
        <div className="home-container">
            <form onSubmit={handleSearch}>
                <input className="searchInput" placeholder="Search movies..." value={searchMovies} onChange={(e) => { setSearchMovies(e.target.value) }} />
                <button className="searchButton" type="submit">Search</button>
            </form>
            <div className="movies">
                {movies.map(movie => <MovieCard movies={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home
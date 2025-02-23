import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../component/MovieCard"

function Favorites() {

    const { favorite } = useMovieContext();

    if (favorite.length > 0) {
        return (
            <>
                <p className="favorite-heading">Your favorite movies</p>
                <div className="favorite-movies">
                    {favorite.map(movie => <MovieCard movies={movie} key={movie.id} />)}
                </div>
            </>
        )
    } else {

        return (
            <div>
                You have no favorite movie yet...
            </div>
        )
    }
}


export default Favorites
import "../css/MovieCard.css"

function MovieCard({ movies }) {

    return (
        <div className="movie-container">

            <div className="movie-poster">
                <p className="heart">♥</p>
                <img src={`https://media.themoviedb.org/t/p/w300${movies.poster_path}`} />
                <div className="movie-title">{movies.title}</div>
                <div className="movie-release_date">{movies.release_date}</div>
                <div className="movie-popularity">Popularity: {movies.popularity}</div>
                <div className="movie-overview">{movies.overview}</div>
                
            </div>

        </div>
    )

}

export default MovieCard
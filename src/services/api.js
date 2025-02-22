const API_KEY = "47e846078333cd04f40f828b5e35075c"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async() => {
    const popularMovies = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await popularMovies.json();
    return data.results;
}

export const searchPopularMovies = async(query) => {
    const searchMovies = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`)
    const data = await searchMovies.json();
    return data.results;
}
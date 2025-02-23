import { useContext, createContext, useState, useEffect } from "react"

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {


    const [favorite, setFavorite] = useState(() => {
        const storedFavorite = localStorage.getItem("favorite")

        if (storedFavorite) {
            return JSON.parse(storedFavorite);
        } else {
            return []
        }
    })

    // useEffect(() => {
    //     localStorage.setItem('favorite', JSON.stringify(favorite))
    // }, [favorite])

    const addToFavorite = (movie) => {
        setFavorite(prev => {
            const updatedStorage = [...prev, movie];
            localStorage.setItem('favorite', JSON.stringify(updatedStorage));
            return updatedStorage;
        })
    }

    const removeFromFavorite = (movieId) => {
        setFavorite(movies => {
            const updatedStorage = movies.filter(movie => movie.id !== movieId);
            localStorage.setItem("favorite", JSON.stringify(updatedStorage));
            return updatedStorage;
        });
    }

    const isFavorite = (movieId) => {
        return favorite.some(movie => movie.id === movieId)
    }

    const value = {
        addToFavorite,
        removeFromFavorite,
        isFavorite,
        favorite,
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )

}
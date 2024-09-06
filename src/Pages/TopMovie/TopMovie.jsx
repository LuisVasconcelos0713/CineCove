import "./TopMovie.css";
import {useState,useEffect} from "react";
import MovieCard from "../../Components/MovieCard/MovieCard.jsx";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const TopMovie = (props) => {

    const [topMovie, setTopMovie] = useState([]);

    const getTopMovies = async () => {
        let allMovies = []
        for (let page = 1; page < 12; page++) {
            const res = await fetch(`${moviesUrl}top_rated?${apiKey}&language=pt-BR&page=${page}`)
            const data = await res.json()
            allMovies = [...allMovies, ...data.results]
        }
        setTopMovie(allMovies)

    }

    useEffect(() => {
        getTopMovies()
    }, []);

    return (
        <div className={"topMovie"}>
            <h1>Top Rated Movies</h1>
            <div className={"topMovie-container"}>
                {topMovie.map((movie) => (
                    <MovieCard movie={movie} showDetails={true} classContainer={"MovieCard-containerTopMovies"}></MovieCard>
                ))}
            </div>
        </div>
    );
}

export default TopMovie;
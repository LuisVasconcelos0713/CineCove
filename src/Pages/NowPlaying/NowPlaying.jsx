import "./NowPlaying.css";
import {useState,useEffect} from "react";
import MovieCard from "../../Components/MovieCard/MovieCard.jsx";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const NowPlaying = (props) => {

    const [movie, setMovie] = useState([]);

    const getMovies = async () => {
        let allMovies = []
        for (let page = 1; page < 12; page++) {
            const res = await fetch(`${moviesUrl}now_playing?${apiKey}&language=pt-BR&page=${page}`)
            const data = await res.json()
            allMovies = [...allMovies, ...data.results]
        }
        setMovie(allMovies)

    }

    useEffect(() => {
        getMovies()
    }, []);

    return (
        <div className={"topMovie"}>
            <h1>Now Playing</h1>
            <div className={"topMovie-container"}>
                {movie.map((movie) => (
                    <MovieCard movie={movie} showDetails={true} classContainer={"MovieCard-containerTopMovies"}></MovieCard>
                ))}
            </div>
        </div>
    );
}

export default NowPlaying;
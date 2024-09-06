import './Search.css';
import "../TopMovie/TopMovie.css"
import {useSearchParams} from "react-router-dom";
import {useState,useEffect} from "react";
import movie from "../Movie/Movie.jsx";
import MovieCard from "../../Components/MovieCard/MovieCard.jsx";
import SerieCard from "../../Components/MovieCard/SerieCard.jsx";

const searchMoviesUrl = import.meta.env.VITE_SEARCHMOVIE;
const searchSeriesUrl = import.meta.env.VITE_SEARCHSERIE;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = (props) => {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const minRating = 7.0

    const getMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json();
        const filteredMovies = data.results.filter((movie) => movie.vote_average >= minRating)
        setMovies(filteredMovies)
    }
    const getSeries = async (url) => {
        const res = await fetch(url)
        const data = await res.json();
        const filteredSeries = data.results.filter((serie) => serie.vote_average >= minRating)
        setSeries(filteredSeries)
    }

    useEffect(() => {
        const urlMoviesSearch = `${searchMoviesUrl}?${apiKey}&query=${query}&language=pt-BR&sort_by=popularity.desc`
        const urlSeriesSearch = `${searchSeriesUrl}?${apiKey}&query=${query}&language=pt-BR&sort_by=popularity.desc`
        console.log('URL Movies Search:', urlMoviesSearch);
        console.log('URL Series Search:', urlSeriesSearch);
        getMovies(urlMoviesSearch)
        getSeries(urlSeriesSearch)
    }, [query]);

    return (
        <div>
            <div className={"topMovie"}>
                <h1><span className={"query"}>{query ? query.toUpperCase() + " " : "Results:" }</span> Titles</h1>
                <div className={"topMovie-container"}>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} showDetails={true}
                                   classContainer={"MovieCard-containerTopMovies"}></MovieCard>
                    ))}
                    {series.map((serie) => (
                        <SerieCard key={movie.id} movie={serie} showDetails={true} classContainer={"MovieCard-containerTopMovies"}></SerieCard>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Search;
import "./Series.css";
import {useState,useEffect} from "react";
import MovieCard from "../../Components/MovieCard/MovieCard.jsx";
import SerieCard from "../../Components/MovieCard/SerieCard.jsx";

const seriesUrl = import.meta.env.VITE_SERIES;
const apiKey = import.meta.env.VITE_API_KEY;

const NowPlaying = (props) => {

    const [series, setSeries] = useState([]);

    const getSeries = async () => {
        let allSeries = []
        for (let page = 1; page < 12; page++) {
            const res = await fetch(`${seriesUrl}/top_rated?${apiKey}&language=pt-BR&page=${page}`)
            const data = await res.json()
            allSeries = [...allSeries, ...data.results]
        }
        setSeries(allSeries)

    }

    useEffect(() => {
        getSeries()
    }, []);

    return (
        <div className={"topMovie"}>
            <h1>Top Rated Series</h1>
            <div className={"topMovie-container"}>
                {series.map((movie) => (
                    <SerieCard movie={movie} showDetails={true} classContainer={"MovieCard-containerTopMovies"}></SerieCard>
                ))}
            </div>
        </div>
    );
}

export default NowPlaying;
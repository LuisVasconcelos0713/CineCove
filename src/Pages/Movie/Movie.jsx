import './movie.css';
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {BsFillFileEarmarkTextFill, BsGraphUp, BsHourglassSplit, BsWallet2} from "react-icons/bs";
import MovieCard from "../../Components/MovieCard/MovieCard.jsx";

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movie = () => {
    const [movie, setMovie] = useState(null);
    const {id} = useParams()

    const getMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data)
    }

    useEffect(() => {
        const urlMovie = `${movieUrl}${id}?${apiKey}&language=pt-br`
        console.log(urlMovie);
        getMovies(urlMovie)
    }, [id]);

    return (
        <div>
            {movie &&
                <div className="movie-page">
                    <MovieCard movie={movie} showLink={false}></MovieCard>
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2></BsWallet2> Orçamento
                        </h3>
                        <p>${movie.budget}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp></BsGraphUp> Receita:
                        </h3>
                        <p>${movie.revenue}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit></BsHourglassSplit> Duração
                        </h3>
                        <p>{movie.runtime}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsFillFileEarmarkTextFill></BsFillFileEarmarkTextFill> Descrição
                        </h3>
                        <p className={"movieOverview"}>{movie.overview}</p>
                    </div>
                </div>}
        </div>
    );
}

export default Movie;
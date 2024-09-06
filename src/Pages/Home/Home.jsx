import './Home.css';
import {useState,useEffect,useRef} from "react";
import MovieCard from "../../Components/MovieCard/MovieCard.jsx";
import { RiArrowDropRightLine } from "react-icons/ri";
import CarouselComponents from "./HomeComponents/CarouselComponents.jsx";
import SerieCard from "../../Components/MovieCard/SerieCard.jsx";


const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const seriesUrl = import.meta.env.VITE_SERIES;


const Home = (props) => {

    const [topMovie, setTopMovie] = useState([]);
    const [nowRealesesMovies, setNowRealesesMovies] = useState([]);
    const [popularMovie, setPopularMovie] = useState([]);
    const [series, setSeries] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const carouselTopMovies = useRef(null);
    const carouselPlayingNow = useRef(null);
    const carouselPopularMovie = useRef(null);
    const carouselSeries = useRef(null);



    const getTopMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovie(data.results)
    }
    const getNowRealesesMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setNowRealesesMovies(data.results)
    }
    const getPopularMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setPopularMovie(data.results)
    }
    const getSeries = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setSeries(data.results)
    }

    useEffect(() => {

        const urlTopMovie = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;
        const urlPopularMovie = `${moviesUrl}popular?${apiKey}&language=pt-BR`;
        const urlNowRealesesMovie = `${moviesUrl}now_playing?${apiKey}&language=pt-BR`;
        const urlSeries = `${seriesUrl}/top_rated?${apiKey}&language=pt-BR`;
        console.log(urlSeries)

        getTopMovie(urlTopMovie)
        getNowRealesesMovies(urlNowRealesesMovie)
        getPopularMovie(urlPopularMovie)
        getSeries(urlSeries)

    }, []);



    const buttonHandlerLeftTop = (e) => {
        e.preventDefault();
        carouselTopMovies.current.scrollLeft -= carouselTopMovies.current.offsetWidth
    }
    const buttonHandlerRightTop = (e) => {
        e.preventDefault();
        carouselTopMovies.current.scrollLeft += carouselTopMovies.current.offsetWidth
    }

    const buttonHandlerLeftPlaying = (e) => {
        e.preventDefault();
        carouselPlayingNow.current.scrollLeft -= carouselPlayingNow.current.offsetWidth
    }
    const buttonHandlerRightPlaying = (e) => {
        e.preventDefault();
        carouselPlayingNow.current.scrollLeft += carouselPlayingNow.current.offsetWidth
    }

    const buttonHandlerLeftPopular = (e) => {
        e.preventDefault();
        carouselPopularMovie.current.scrollLeft -= carouselPopularMovie.current.offsetWidth
    }
    const buttonHandlerRightPopular = (e) => {
        e.preventDefault();
        carouselPopularMovie.current.scrollLeft += carouselPopularMovie.current.offsetWidth
    }
    const buttonHandlerLeftSeries = (e) => {
        e.preventDefault();
        carouselSeries.current.scrollLeft -= carouselSeries.current.offsetWidth
    }
    const buttonHandlerRightSeries = (e) => {
        e.preventDefault();
        carouselSeries.current.scrollLeft += carouselSeries.current.offsetWidth
    }



    return (
        <div className={"container-general"}>

            <CarouselComponents buttonLeft={buttonHandlerLeftTop} buttonRight={buttonHandlerRightTop}
                                classContainer={"container-general-buttons"} link={"/topmovies"}
                                category={"Top Rated Movies"}></CarouselComponents>

            <div className={"container-general-movies"} ref={carouselTopMovies}>
                {topMovie.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} showDetails={true}
                               classContainer={"MovieCard-container"}></MovieCard>  // Adicione a key ao map
                ))}
            </div>

            <hr className="hr"/>

            <CarouselComponents
                buttonLeft={buttonHandlerLeftPlaying}
                buttonRight={buttonHandlerRightPlaying}
                classContainer={"container-general-buttons2"}
                link={"/nowplaying"}
                category={"Now Playing"}>
            </CarouselComponents>

            <div className={"container-general-movies"} ref={carouselPlayingNow}>
                {nowRealesesMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} showDetails={true}
                               classContainer={"MovieCard-container"}></MovieCard>  // Adicione a key ao map
                ))}
            </div>

            <hr className="hr"/>


            <CarouselComponents
                buttonLeft={buttonHandlerLeftPopular}
                buttonRight={buttonHandlerRightPopular}
                classContainer={"container-general-buttons2"}
                link={"/popular"}
                category={"Popular"}>
            </CarouselComponents>

            <div className={"container-general-movies"} ref={carouselPopularMovie}>
                {popularMovie.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} showDetails={true}
                               classContainer={"MovieCard-container"}></MovieCard>  // Adicione a key ao map
                ))}
            </div>

            <hr className="hr"/>


            <CarouselComponents
                buttonLeft={buttonHandlerLeftSeries}
                buttonRight={buttonHandlerRightSeries}
                classContainer={"container-general-buttons2"}
                link={"/series"}
                category={"Series"}>
            </CarouselComponents>

            <div className={"container-general-movies"} ref={carouselSeries}>
                {series.map((movie) => (
                    <SerieCard key={movie.id} movie={movie} showDetails={true}
                               classContainer={"MovieCard-container"}></SerieCard>  // Adicione a key ao map
                ))}
            </div>
        </div>
    );
}

export default Home;
import './MovieCard.css';
import "../../Layout/MovieGrid/MovieGrid.css"
import "../../Pages/TopMovie/TopMovie.css"
import {FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

const imgUrl = import.meta.env.VITE_IMG;


const SerieCard = ({movie,showDetails,classContainer }) => {
    return (
        <div className={classContainer}>
            <div>
                <img src={imgUrl + movie.poster_path}/>
            </div>
            <div>
                <h3>{movie.name}</h3>
            </div>
            <div>
                <h3><FaStar></FaStar>{movie.vote_average.toFixed(2)}</h3>
            </div>
            {showDetails && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    );
}

export default SerieCard;
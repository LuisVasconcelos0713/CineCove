import './Navbar.css';
import {Link} from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Navbar = (props) => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search)return

        navigate(`search?q=${search}`);
        setSearch("")
    }

    return (
        <div className="Navbar">
            <h2>
                <Link to="/"><BiCameraMovie ></BiCameraMovie>Movies</Link>
            </h2>
            <form onSubmit={handleSubmit} className={"form"}>
                <input
                    className={"input"}
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    placeholder={"Search..."}
                />
                <button className={"button"} type={"submit"}><BiSearchAlt2></BiSearchAlt2></button>
            </form>
        </div>
    );
}

export default Navbar;
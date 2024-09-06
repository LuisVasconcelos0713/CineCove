import {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import MovieCard from "./Components/MovieCard/MovieCard.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css"
import Footer from "./Components/Footer/Footer.jsx";

const App = (props) => {


    return (
        <div className={"container"}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default App;
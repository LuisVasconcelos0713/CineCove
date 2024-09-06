import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Movie from "./Pages/Movie/Movie.jsx";
import Search from "./Pages/Search/Search.jsx";
import TopMovie from "./Pages/TopMovie/TopMovie.jsx";
import NowPlaying from "./Pages/NowPlaying/NowPlaying.jsx";
import Popular from "./Pages/Popular/Popular.jsx";
import Series from "./Pages/Series/Series.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<App/>}>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/movie/:id" element={<Movie/>}/>
                <Route exact path="/search" element={<Search/>}/>
                <Route exact path="/topmovies" element={<TopMovie/>}/>
                <Route exact path="/nowplaying" element={<NowPlaying/>}/>
                <Route exact path="/popular" element={<Popular/>}/>
                <Route exact path="/series" element={<Series/>}/>

            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)

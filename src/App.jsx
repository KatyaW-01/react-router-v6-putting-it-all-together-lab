import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import DirectorContainer from "./pages/DirectorContainer"
import DirectorCard from "./pages/DirectorCard"
import MovieCard from "./pages/MovieCard"
import About from "./pages/About"
import DirectorForm from "./pages/DirectorForm"
import MovieForm from "./pages/MovieForm"
import DirectorList from "./pages/DirectorList";

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/directors" element={<DirectorContainer />} >
                    <Route index element={<DirectorList />} /> 
                    <Route path="new" element={<DirectorForm />}/>
                    <Route path=":id" element={<DirectorCard />} >
                        <Route path="movies/:movieId" element={<MovieCard />} />
                        <Route path="movies/new" element={<MovieForm />}/>
                    </Route >
                </Route>
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import DirectorContainer from "./pages/DirectorContainer"
import DirectorCard from "./pages/DirectorCard"
import MovieCard from "./pages/MovieCard"

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/directors" element={<DirectorContainer />} >
                    <Route path=":id" element={<DirectorCard />} />
                        <Route path="movies/:movieId" element={<MovieCard />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App

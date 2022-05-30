import MoviesList from './pages/MoviesList';
import MovieDetails from './pages/MovieDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/MoviesList" element={<MoviesList />} />
          <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
          <Route path="/*" element={<MoviesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadMovie } from "../redux/actions";
import '../movie-details.css';
import Loading from './Loading';

const MovieDetails = () => {
    let { movieId } = useParams();
    let dispatch = useDispatch();
    const { movie } = useSelector(state => state.data);
    const fetched = useSelector(state => state.data.fetched);
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(loadMovie(movieId))
    }, [])
    const backHome = () => {
        navigate("../MovieList", { replace: true })
    }
    return (
        <React.Fragment>
            {!fetched ?
                <Loading />
                :
                <React.Fragment>
                    <p onClick={() => backHome()} className="back"> Back</p>
                    <div className="description-box">
                        <div className="description-box--image">
                            <img src={movie.Poster} />
                        </div>
                        <div className="description-box--text">
                            <React.Fragment>
                                <h1>{movie.Title}</h1>
                                <p>Released: {movie.Released}</p>
                                <p>Genre: {movie.Genre}</p>
                                <p>Director: {movie.Director}</p>
                                <p>Actors: {movie.Actors}</p>
                                <p>Language: {movie.Language}</p>
                                <p>Awards: {movie.Awards}</p>
                                <p>{movie.Plot}</p>
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="description-ratings-block">
                        <h3>Ratings :</h3>
                        <div className="description-ratings">
                            <div>
                                Meta Score: {movie.Metascore}
                            </div>

                            <div>
                                IMDB Rating: {movie.imdbRating}
                            </div>

                            <div>
                                IMDB Votes: {movie.imdbVotes}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )

}

export default MovieDetails;

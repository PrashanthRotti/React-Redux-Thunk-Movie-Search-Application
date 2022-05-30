import React, { useEffect, useState } from 'react';
import { loadMovies, searchMovie } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import Loading from './Loading';
import '../movie.css';

const MovieList = () => {
    const [search, setSearch] = useState(false)
    const dispach = useDispatch();
    let navigate = useNavigate();
    const movieList = useSelector(state => state.data);
    const fetching = useSelector(state => state.data.fetching);
    useEffect(() => {
        dispach(loadMovies());
    }, [])

    const movieDetails = (movieId) => {
        navigate(`../MovieDetails/${movieId}`, { replace: true })
    }

    const searchMovieName = (movieName) => {
        if (movieName.length >= 3) {
            dispach(searchMovie(movieName))
            setSearch(true)
        }
        if (movieName.length === 0) {
            setSearch(false)
        }
    }

    return (
        <React.Fragment>
            {!fetching ?
                <Loading />
                :
                <React.Fragment>
                    <center>
                        <input
                            type="text"
                            placeholder="Search any movie"
                            name="movieName"
                            onChange={(e) => searchMovieName(e.target.value)}
                            autoComplete="off"
                            className="search-movie"
                        />
                    </center>
                    {!search && fetching &&
                        <div className="mvscont">
                            <center>
                                {movieList && movieList.movies.map((item, index) => (
                                    <div key={index} className="mv-card" onClick={() => movieDetails(item.imdbID)}>
                                        <div className="mv-header" style={{ "backgroundSize": "cover" }}>
                                            <div className="header-icon-container">
                                                <img src={item.Poster} className="fa header-icon" />
                                            </div>
                                        </div>
                                        <div className="mv-content">
                                            <div className="mv-content-header">
                                                <h3 className="mv-title">{item.Title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </center>
                        </div>
                    }

                    {search && <Search data={movieList.searchMovies} movieDescription={movieDetails} />}

                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default MovieList;

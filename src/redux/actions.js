import * as type from './actionType';
import axios from 'axios';
import { baseURL } from "../common/MovieApi";
import { APIKey } from "../common/MovieApiKey";

const getMovies = (movies) => ({
    type: type.GET_MOVIES,
    payload: movies
})

export const loadMovies = () => {
    return function(dispatch) {
        axios
            .get(`${baseURL}?s='bean'&apikey=${APIKey}`)
            .then((resp) => {
                dispatch(getMovies(resp.data.Search))
        })
        .catch(error => console.log(error))
    }
}

const getMovieDetails = (movie) => ({
    type: type.GET_SINGLE_MOVIE,
    payload: movie,
})

export const loadMovie = (movieId) => {
    return async function(dispatch) {
        try {
            const resp = await axios.get(`${baseURL}?i=${movieId}&apikey=${APIKey}`)
            dispatch(getMovieDetails(resp.data))
        } catch(err) {
            console.log(err)
        }
    }
}

export const movieSearch = (movie) => ({
    type: type.GET_SEARCH_MOVIE,
    payload: movie,
})

export const searchMovie = (movieName) => {
    return async function(dispatch) {
        try {
            const resp = await axios.get(`${baseURL}?s=${movieName}&apikey=${APIKey}`)
            dispatch(movieSearch(resp.data.Search))
        } catch (err) {
            console.log(err);
        }
    }
}

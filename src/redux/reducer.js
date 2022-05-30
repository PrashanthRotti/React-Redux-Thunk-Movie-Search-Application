import * as type from "./actionType";

const initialState = {
    movies: [],
    movie: {},
    searchMovies: [],
    fetching: false,
    fetched: false,
}

const useReducers = (state = initialState, action) => {
    switch(action.type) {
        case type.GET_MOVIES:
        return {
            ...state,
            movies: action.payload,
            fetching: true,
            fetched: false,
        }

        case type.GET_SINGLE_MOVIE:
            return {
                ...state,
                movie: action.payload,
                fetching: true,
                fetched: true,
            }

        case type.GET_SEARCH_MOVIE:
            return {
                ...state,
                searchMovies: action.payload,
                fetching: true,
            }

        default:
            return state
    }
}

export default useReducers;

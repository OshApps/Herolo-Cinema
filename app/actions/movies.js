import fetchHelper from '@utils/fetchHelper';
import movieHelper from "@utils/movieHelper";

import { API_SEARCH_URL, API_ID_URL } from '@consts/urls/omdb';

const search = "man";
const SEARCH_URL = API_SEARCH_URL + search;

export const SET_MOVIES_ACTION = "SET_MOVIES"

export function fetchMovies() {
    const request = fetchHelper.get(SEARCH_URL);

    return (dispatch) => {
        request.then((res) => {
            let result = res["Search"];
            let idUrls = [];

            if (Array.isArray(result)) {
                idUrls = result.map(({ imdbID }) => (API_ID_URL + imdbID));
            }

            fetchHelper.get(...idUrls)
                .then((movies) => {
                    dispatchMovies(dispatch, movies);
                });
        })
    };
}

function dispatchMovies(dispatch, movies) {

    movies = movies.map(getMovie);

    dispatch({ type: SET_MOVIES_ACTION, movies });
}

function getMovie({ imdbID, Title, Year, Runtime, Genre, Director, Poster }) {
    return {
        id: imdbID,
        title: movieHelper.formatTitle(Title),
        year: Year,
        runtime: Runtime,
        genre: Genre,
        director: Director,
        poster: Poster
    };
}


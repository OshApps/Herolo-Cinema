import uniqid from "uniqid";

import { SET_MOVIES_ACTION, ADD_MOVIE_ACTION, EDIT_MOVIE_ACTION, DELETE_MOVIE_ACTION } from "@actions/movies";

export default function (state = [], action) {

  switch (action.type) {

    case SET_MOVIES_ACTION:
      state = action.movies || [];
      break;

    case ADD_MOVIE_ACTION:
      action.movie.id = uniqid();
      state = [...state, action.movie];
      break;

    case EDIT_MOVIE_ACTION:
      state = state.map((movie) => movie.id != action.movie.id ? movie : action.movie);
      break;

    case DELETE_MOVIE_ACTION:
      state = state.filter((movie) => movie.id != action.movieId);
      break;
  }

  return state;
}
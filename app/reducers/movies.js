import { SET_MOVIES_ACTION } from "@actions/movies";

export default function(state = [], action) {

  switch (action.type) {

    case SET_MOVIES_ACTION:
      state = action.movies || [];
      break;
  }

  return state;
}
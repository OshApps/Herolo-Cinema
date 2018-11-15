
import { OPEN_MODAL_ACTION, CLOSE_MODAL_ACTION } from "@actions/modal";

let defaultModal = {
  type: false,
  movieId: false
}

export default function (state = defaultModal, action) {

  switch (action.type) {

    case OPEN_MODAL_ACTION:
      state = { ...action.modal };
      break;

    case CLOSE_MODAL_ACTION:
      state = defaultModal;
      break;
  }

  return state;
}

export const OPEN_MODAL_ACTION = "OPEN_MODAL"
export const CLOSE_MODAL_ACTION = "CLOSE_MODAL"

export const Types = {
    DETAILS_POPUP_TYPE: "DETAILS_POPUP",
    EDIT_POPUP_TYPE: "EDIT_POPUP",
    DELETE_POPUP_TYPE: "DELETE_POPUP"
}

export function openModal(type, movieId = false) {
    return { type: OPEN_MODAL_ACTION, modal: { type, movieId } };
}

export function closeModal() {
    return { type: CLOSE_MODAL_ACTION };
}




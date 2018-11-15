import { combineReducers } from "redux"

import movies from "./movies"
import modal from "./modal"

const rootReducer = combineReducers({
    movies,
    modal
})

export default rootReducer

